import React from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import ARTICLES, { ArticleModule } from "../../data/articles";
import FeaturedPosts from "../../components/FeaturedPosts";

type Data = {
  articles: Array<ArticleModule>;
};

export const meta: MetaFunction = () => {
  const title = "Le Blog | Thibaud Duthoit";
  const description =
    "En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire.";
  return { title, description };
};

export const loader: LoaderFunction = () => {
  const articles = ARTICLES;
  return {
    articles,
  };
};

export default function BlogIndex() {
  const { articles } = useLoaderData<Data>();

  return (
    <div>
      <FeaturedPosts
        title="Tout le blog !"
        subtitle="En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire."
        posts={articles.map((article) => ({
          href: article.href,
          title: article.attributes.meta.title,
          picture: article.attributes.picture?.url,
          pictureAlt: article.attributes.picture?.alt,
          date: article.attributes.date,
          timeReading: article.attributes.timeReading,
          excerpt: article.attributes.meta.description,
        }))}
        hideLinks
      />
    </div>
  );
}
