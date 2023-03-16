import Head from "next/head";

type PropsType = {
  title: string;
};

const Meta = ({ title }: PropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="I am a talented, creative and highly experienced senior front-end developer with team leader skills and over fifteen years commercial/agency experience. I can help your business reach its full web potential."
      />
      <meta property="og:title" content="[SG] - Freelance Front End Engineer" />
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
  );
};

export default Meta;
