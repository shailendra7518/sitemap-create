import { useLoaderData } from "@remix-run/react";
import { DiscussionEmbed } from "disqus-react";

const DisqusCommentBlock = ({ blogData }: any) => {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const { env } = useLoaderData();

  const disqusConfig = {
    url: pageUrl,
    identifier: blogData.slug.current,
    title: blogData.name,
  };

  return (
    <DiscussionEmbed shortname={env.DISQUS_SHORTNAME} config={disqusConfig} />
  );
};

export default DisqusCommentBlock;
