import sanityClient from 'picosanity'
import fs from 'fs'
import path from 'path'
import simpleGit from 'simple-git'

interface Url {
  url: string
  priority: number
  lastmod: string
}

const client = sanityClient({
  apiVersion: '2021-03-25',
  projectId: 'q62byq95',
  dataset: 'production',
  useCdn: true
})

const staticUrls: Url[] = [
  { url: '/', priority: 1.0, lastmod: new Date().toISOString() },
  { url: '/about', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/clutch-success', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/contact', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/methodology', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/project-survey', priority: 0.8, lastmod: new Date().toISOString() },
  {
    url: '/startup-partnerships',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { url: '/testimonials', priority: 0.8, lastmod: new Date().toISOString() }
]

const repositoryUrl = "https://github.com/shailendra7518/sitemap-create.git"

const getDynamicUrls = async (): Promise<Url[]> => {
  const queries = [
    `*[_type == "blog"]{ "slug": slug, "updatedAt": _updatedAt }`,
    `*[_type == "project"]{ "slug": slug, "updatedAt": _updatedAt }`,
    `*[_type == "jobOpening"]{ "slug": slug, "updatedAt": _updatedAt }`,
    `*[_type == "consultant"]{ "slug": slug, "updatedAt": _updatedAt }`,
    `*[_type == "service"]{ "slug": slug, "updatedAt": _updatedAt }`
  ]

  const [blogs, projects, jobOpenings, consultants, services] =
    await Promise.all(queries.map(query => client.fetch(query)))
  console.log(blogs)
  const dynamicUrls: Url[] = [
    ...blogs.map((blog: { slug: { current: string }; updatedAt: string }) => ({
      url: `/blogs/${blog.slug.current}`,
      priority: 0.5,
      lastmod: new Date(blog.updatedAt).toISOString()
    })),
    ...projects.map(
      (project: { slug: { current: string }; updatedAt: string }) => ({
        url: `/projects/${project.slug.current}`,
        priority: 0.5,
        lastmod: new Date(project.updatedAt).toISOString()
      })
    ),
    ...jobOpenings.map(
      (jobOpening: { slug: { current: string }; updatedAt: string }) => ({
        url: `/job-openings/${jobOpening.slug.current}`,
        priority: 0.5,
        lastmod: new Date(jobOpening.updatedAt).toISOString()
      })
    ),
    ...consultants.map(
      (consultant: { slug: { current: string }; updatedAt: string }) => ({
        url: `/consultants/${consultant.slug.current}`,
        priority: 0.5,
        lastmod: new Date(consultant.updatedAt).toISOString()
      })
    ),
    ...services.map(
      (service: { slug: { current: string }; updatedAt: string }) => ({
        url: `/services/${service.slug.current}`,
        priority: 0.5,
        lastmod: new Date(service.updatedAt).toISOString()
      })
    )
  ]

  return dynamicUrls
}

const generateSitemapContent = async (): Promise<string> => {
  const dynamicUrls = await getDynamicUrls()
  const urls: Url[] = [...staticUrls, ...dynamicUrls]
  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          url => `
        <url>
          <loc>${`https://techstaunch.com${url.url}`}</loc>
          <priority>${url.priority}</priority>
          <lastmod>${url.lastmod}</lastmod>
        </url>
      `
        )
        .join('')}
    </urlset>
  `.trim()

  return sitemapContent
};

const pushToGithub = async () => {
  const git = simpleGit();

  try {
    // Initialize a new Git repository if it doesn't exist
    if (!await git.checkIsRepo()) {
      await git.init();
      await git.addRemote('origin', repositoryUrl);
    }
    await git.fetch('origin', 'main');

    await git.add('.');

    await git.commit('Update sitemap.xml');

    await git.checkout('main');

    await git.pull('origin', 'main');

    await git.push('origin', 'main');

    console.log('Changes pushed to the repository successfully.');
  } catch (err) {
    console.error('Error pushing to repository:', err);
  }
};

;(async () => {
  try {
    const sitemapContent = await generateSitemapContent()
    const filePath = path.join(process.cwd(), 'public', 'sitemap.xml')
    fs.writeFileSync(filePath, sitemapContent, 'utf8')
    console.log('sitemap.xml generated and saved to public folder')

    // Push changes to GitHub
    await pushToGithub();
  } catch (error) {
    console.error('Error:', error)
  }
})()
