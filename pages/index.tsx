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
        <title>[SG] - Freelance Front End Engineer</title>
        <meta
          name="description"
          content="I am a talented, creative and highly experienced senior front-end developer with team leader skills and over fifteen years commercial/agency experience. I can help your business reach its full web potential."
        />
        <meta
          property="og:title"
          content="[SG] - Freelance Front End Engineer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stuartgarner.dev/" />
        <meta
          property="og:image"
          content={`https://www.stuartgarner.dev/logo.jpg`}
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Stuart's Profile Picture" />
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
