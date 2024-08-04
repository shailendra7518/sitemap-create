import { urlFor } from "~/root";

const AboutProject = ({ about }: any) => {
  return (
    <section className="about-project mt-lg-0">
      <div className="container">
        <div className="heading text-center">
          <h2 className="pt-5 pt-md-0 mt-5">
            <span className="fw-bold me-2">About</span>Project
          </h2>
        </div>
        <div className="about-project-heading mt-4">
          <h2 className="fw-bolder">{about.name}</h2>
        </div>
        <p className="content-details mb-1">
          {about.description.map((d: any) => d.children[0].text)}
        </p>
        <p className="content-details">
          <span className="text-theme" role="heading" aria-level={2}>Technology :</span> {about.technologies}
        </p>
        <div className="project-detail-image text-center">
          <img
            className="img-fluid my-5"
            src={urlFor(about?.projectImage).url()}
            alt={about.name + " Project Image"}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
