import Head from "next/head";

import DefaultLayout from "../templates/defaultLayout";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { RTNode } from "@prismicio/types";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type ProjectPropsType = {
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
  description: [] | [RTNode, ...RTNode[]] | null | undefined;
  githublink?: any;
  live_link?: any;
  screenshot: any;
};

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
          <section id="intro-section" className="h-[600px] bg-gray-800">
            <div className="container relative mx-auto h-full bg-slate-900 p-10 lg:py-36 2xl:py-56">
              <div className="w-[100%] sm:w-[50%] md:w-[50%]">
                <PrismicRichText field={page.data.heading} />
              </div>
              <Link className="button-link" href="/#about-section">
                Learn more
              </Link>
              <div className="absolute bottom-0 right-0 h-[50%] sm:h-[70%] md:h-[70%] lg:h-[90%]">
                <PrismicNextImage field={page.data.profile_picture} />
              </div>
            </div>
          </section>
          <section id="about-section" className="bg-black">
            <div className="container mx-auto p-10 text-gray-50">
              <PrismicRichText field={page.data.about_me_heading} />
              <div className="md:text-xl xl:text-2xl">
                <PrismicRichText field={page.data.about_me_body} />
              </div>
              <Link className="button-link" href="/#about-section">
                [My resume]
              </Link>
            </div>
          </section>
          <section id="portfolio-section" className="bg-white">
            <div className="container mx-auto bg-white p-10">
              <PrismicRichText field={page.data.portfolio_heading} />
              <div className="flex flex-col gap-20">
                {page.data.portfolio?.map((item: any, index: number) => {
                  return <Project key={`workItem${index}`} {...item} />;
                })}
              </div>
            </div>
          </section>
          <section id="testimonials-section" className="bg-slate-900">
            <div className="container mx-auto  bg-slate-900 p-10 text-gray-100">
              <h2>Testimonials</h2>
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
                {page.data.testimonials?.map((item: any, index: number) => {
                  return (
                    <div
                      key={`quote${index}`}
                      className="flex h-[100%] flex-col justify-between gap-10"
                    >
                      <div>
                        <PrismicRichText field={item.quote} />
                      </div>
                      <div className="flex flex-row justify-start gap-5">
                        <div className="h-[75px] grayscale">
                          <PrismicNextImage field={item.profile_picture} />
                        </div>
                        <div className="mb-0 basis-3/4">
                          <PrismicRichText field={item.name} />
                          <PrismicRichText field={item.affiliation} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      </DefaultLayout>
    </>
  );
}

const Project = (props: ProjectPropsType) => {
  const { title, description, screenshot, githublink, live_link } = props;
  return (
    <div className="lg:flex lg:flex-row lg:gap-10">
      <div className="lg:basis-1/3">
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />

        {(live_link || githublink) && (
          <>
            {live_link && (
              <Link className="button-link" href="/#about-section">
                Live
              </Link>
            )}
            {githublink && (
              <Link className="button-link" href="/#about-section">
                GitHub
              </Link>
            )}
          </>
        )}
      </div>
      <div className="mt-10 bg-gray-500 lg:mt-0 lg:mb-0 lg:basis-2/3">
        <PrismicNextImage field={screenshot} />
      </div>
    </div>
  );
};

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");
  return {
    props: {
      page,
    },
  };
}
