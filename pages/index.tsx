import Head from "next/head";

import DefaultLayout from "../templates/defaultLayout";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";

import HomePageIntro from "../components/sections/HomePageIntro";
import HomePageAbout from "../components/sections/HomePageAbout";
import HomePagePortfolio from "../components/sections/HomePagePortfolio";
import HomePageTestimonials from "../components/sections/HomePageTestimonials";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page }: Props) {
  return (
    <>
      <Head>
        <title>[SG] - Home - Senior Front End Engineer</title>
        <meta
          name="description"
          content="I am a talented, creative and highly experienced senior front-end developer with team leader skills and over fifteen years commercial/agency experience. I can help your business reach its full web potential."
        />
        <link rel="canonical" href="https://www.stuartgarner.dev/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <>
          <HomePageIntro heading={page.data.heading} />
          <HomePageAbout
            heading={page.data.about_me_heading}
            profilePicture={page.data.profile_picture}
            body={page.data.about_me_body}
          />
          <HomePagePortfolio
            heading={page.data.portfolio_heading}
            content={page.data.portfolio}
          />
          <HomePageTestimonials
            heading={page.data.testimonial_heading}
            content={page.data.testimonials}
          />
        </>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");
  return {
    props: {
      page,
    },
  };
}
