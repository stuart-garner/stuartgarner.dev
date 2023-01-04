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
          <section
            id="intro-section"
            className=" bg-white pt-[100px] pb-[125px] clip-path-headerPoly xl:pt-[100px] xl:pb-[200px] 2xl:pt-[150px]"
          >
            <div className="container flex items-center justify-between">
              <div className="flex flex-col gap-10 ">
                <PrismicRichText field={page.data.heading} />
                <Link className="button-link" href="/#about-section">
                  Learn more
                </Link>
              </div>
            </div>
          </section>
          <section id="about-section" className="bg-slate-900">
            <div className="container flex flex-col-reverse items-center justify-between gap-20 text-gray-300 lg:flex-row">
              <div className="basis-2/3">
                <PrismicRichText field={page.data.about_me_heading} />
                <div className="md:text-xl xl:text-2xl">
                  <PrismicRichText field={page.data.about_me_body} />
                </div>
                <Link className="button-link" href="/#about-section">
                  [My resume]
                </Link>
              </div>
              <div className="max-w-[400px] basis-1/3 lg:max-w-none">
                <PrismicNextImage field={page.data.profile_picture} />
              </div>
            </div>
          </section>
          <section id="portfolio-section" className="bg-slate-200">
            <div className="container">
              <PrismicRichText field={page.data.portfolio_heading} />
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                {page.data.portfolio?.map((item: any, index: number) => {
                  return <Project key={`workItem${index}`} {...item} />;
                })}
              </div>
            </div>
          </section>
          <section id="testimonials-section" className="bg-slate-900">
            <div className="container bg-slate-900  text-gray-100">
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
                      <div className="flex flex-row justify-start gap-5 ">
                        <div className="w-[75px] grayscale">
                          <PrismicNextImage field={item.profile_picture} />
                        </div>
                        <div className="mb-0 max-h-[75px] basis-3/4">
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
    <div className="flex flex-col-reverse gap-10">
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

      <div className="mt-10  lg:mt-0 lg:mb-0 lg:basis-2/3">
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
