import React from "react";
import { ArticleFrontMatter } from "../../data/articles";

export type ArticleTitleProps = ArticleFrontMatter & {
  className?: string;
};

const ArticleHeader = ({
  className,
  title,
  excerpt,
  date,
  timeReading,
  picture,
}: ArticleTitleProps): JSX.Element => (
  <div className={className}>
    <h1 className="article-main-title mt-0 mb-12 sm:my-12 break-words">
      {title}
    </h1>
    <h2 className="mb-4 text-gray-600">{excerpt}</h2>
    <p className="mb-16 sm:text-right text-base leading-5 text-gray-500">
      <time dateTime={date} className="my-0">
        {new Date(date).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <span className="mx-1">&middot;</span>
      {timeReading} de lecture
    </p>

    {!!picture && (
      <figure className="mb-16">
        <img src={picture.url} alt={picture.alt} />
        <figcaption className="article-figcaption text-center text-gray-600 mt-4">
          {picture.alt}
          {picture.credits && (
            <div>
              {picture.credits.type}{" "}
              <a href={picture.credits.link}>{picture.credits.name}</a>
            </div>
          )}
        </figcaption>
      </figure>
    )}
  </div>
);

export default ArticleHeader;
