import Head from "next/head";

import DefaultLayout from "../templates/defaultLayout";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Introduction from "./homePage/introduction";
import About from "./homePage/about";
import Portfolio from "./homePage/portfolio";
import Testimonials from "./homePage/testimonials";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page }: Props) {
  return (
    <>
      <Head>
        <title>[STU]</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <>
          <Introduction
            heading={page.data.heading}
            subHeading={page.data.sub_heading}
            profilePic={page.data.profile_picture}
          />
          <About
            heading={page.data.about_me_heading}
            body={page.data.about_me_body}
          />
          <Portfolio content={page.data.portfolio} />
          <Testimonials content={page.data.testimonials} />
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
