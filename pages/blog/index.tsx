import DefaultLayout from "../../templates/defaultLayout";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../../prismicio";

import Meta from "../../components/meta";
import BlogPageHeader from "../../components/sections/BlogPageHeader";
import BlogPageArticles from "../../components/sections/BlogPageArticles";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ page, articles }: Props) {
  return (
    <>
      <Meta title="[SG] - Freelance Front End Engineer" />
      <DefaultLayout>
        <>
          <BlogPageHeader title={page.data.title} />
          <BlogPageArticles heading={page.data.heading} content={articles} />
        </>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("blogpage");

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publish_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      page,
      articles,
    },
  };
}
