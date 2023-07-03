import DefaultLayout from "../templates/defaultLayout";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";

import HomePageIntro from "../components/sections/HomePageIntro";
import HomePageAbout from "../components/sections/HomePageAbout";
import HomePagePortfolio from "../components/sections/HomePagePortfolio";
import HomePageTestimonials from "../components/sections/HomePageTestimonials";
import Meta from "../components/meta";
import BlogPageArticles from "../components/sections/BlogPageArticles";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page, articles, blog }: Props) {
  return (
    <>
      <Meta title="[SG] - Freelance Front End Engineer" />
      <DefaultLayout>
        <>
          <HomePageIntro heading={page.data.heading} />
          <HomePageAbout
            heading={page.data.about_me_heading}
            profilePicture={page.data.profile_picture}
            body={page.data.about_me_body}
          />
          <BlogPageArticles heading={blog.data.heading} content={articles} />
          <HomePagePortfolio
            heading={page.data.portfolio_heading}
            content={page.data.portfolio}
          />

          <HomePageTestimonials
            heading={page.data.testimonial_heading}
            content={page.data.testimonials}
            clients={page.data.clients}
          />
        </>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");
  const blog = await client.getSingle("blogpage");

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publish_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      page,
      blog,
      articles,
    },
  };
}
