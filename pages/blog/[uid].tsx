import DefaultLayout from "../../templates/defaultLayout";
import { createClient } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { components } from "../../slices";
import Meta from "../../components/meta";
import BottomWave from "../../components/waves/Bottom";

import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import DateFormatter from "../../components/dateFormatter";

type Props = {
  article: any;
  latestArticles: any;
};

export default function Post({ article, latestArticles }: Props) {
  console.log(article);
  const date: any = prismicH.asDate(
    article.data.publish_date || article.first_publication_date
  );
  return (
    <>
      <Meta title="[SG] - Freelance Front End Engineer" />
      <DefaultLayout>
        <>
          <section id="post-section-header">
            <div className="container flex gap-10 pb-28"></div>
            <BottomWave colour="fill-white" />
          </section>

          <section id="post-section-body" className="bg-white">
            <div className="container pb-28">
              <div className="pb-5">
                <Link className="button" href="/blog">
                  Return to entries
                </Link>
              </div>

              <div className="mb-5 flex flex-row gap-10">
                <h1 className="text-[100px] text-gray-800">
                  {article.data.title}
                </h1>
              </div>
              <div className="mb-10 rounded-xl bg-slate-200 py-2 px-5 text-gray-600">
                {DateFormatter.format(date)}
              </div>
              <div className="columns-2 gap-10">
                <SliceZone
                  slices={article.data.slices}
                  components={components}
                />
              </div>
            </div>
            <BottomWave colour="fill-black" />
          </section>
        </>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publish_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      article,
      latestArticles,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
