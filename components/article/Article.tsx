import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { motion } from "framer-motion";

import DateFormatter from "../dateFormatter";

type DataType = {
  featured_image?: any;
  publish_date?: any;
  slices: any;
  title?: any;
  excerpt: any;
};

type ArticleTypes = {
  alternate_languages: any;
  data: DataType;
  first_publication_date?: any;
  href: any;
  id: any;
  lang: any;
  last_publication_date?: any;
  linked_documents: any;
  slugs: any;
  tags: any;
  type: any;
  uid: any;
  url: any;
};

type PropTypes = {
  article: any;
};

const Article = (props: PropTypes) => {
  const { article } = props;
  const { data, first_publication_date } = article;

  const date: any = prismicH.asDate(
    data.publish_date || first_publication_date
  );

  console.log(article);
  return (
    <div className="relative flex flex-col rounded-2xl bg-slate-100 p-10">
      <div className="flex flex-row gap-5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ repeat: 0, duration: 0.5 }}
          className="basis-1/5"
        >
          <PrismicNextImage
            field={data.featured_image}
            className="project-image h mt-10 aspect-square rounded-xl object-cover lg:mt-0 lg:mb-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ repeat: 0, duration: 0.5 }}
          className="flex basis-4/5 flex-col justify-between"
        >
          <PrismicLink document={article} aria-label={data.title}>
            <h2>{data.title}</h2>
            <p className="mt-5">
              <strong>{data.sub_title}</strong>
            </p>
          </PrismicLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ repeat: 0, duration: 0.5 }}
        className="flex  h-full flex-col justify-between "
      >
        <div>
          <div className="mt-5 rounded-xl bg-slate-200 py-2 px-5 text-gray-600">
            {DateFormatter.format(date)}
          </div>
          <div className="py-5">
            <PrismicRichText field={data.excerpt} />
          </div>
        </div>
        <div className="text-right">
          <PrismicLink
            className="button"
            document={article}
            aria-label="Read more"
          >
            Read More...
          </PrismicLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Article;
