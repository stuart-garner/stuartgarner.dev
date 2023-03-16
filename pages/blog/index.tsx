import DefaultLayout from "../../templates/defaultLayout";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../../prismicio";
import { v4 as uuidv4 } from "uuid";
import Meta from "../../components/meta";
import BlogPageHeader from "../../components/sections/BlogPageHeader";
import BlogPageArticles from "../../components/sections/BlogPageArticles";
import BottomWave from "../../components/waves/Bottom";
import Article from "../../components/article";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ page, articles }: Props) {
  return (
    <>
      <Meta title="[SG] - Freelance Front End Engineer" />
      <DefaultLayout>
        <>
          <BlogPageHeader title={page.data.title} />

          <section id="article-section" className="bg-white pb-[200px]">
            <div className="container">
              <div className="flex gap-5 pb-5">
                <Link className="button flex items-center gap-5" href="/">
                  Home
                  <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                </Link>
              </div>
              <h2 className="text-black">All Blog Posts</h2>
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                {articles?.map((item: any, index: number) => {
                  return <Article key={uuidv4()} article={item} />;
                })}
              </div>
            </div>
            <BottomWave colour="fill-black" />
          </section>
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
