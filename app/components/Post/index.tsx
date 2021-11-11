import React from "react";
import { Link } from "react-router-dom";

export type Props = {
  href: string;
  title: string;
  picture?: string;
  pictureAlt?: string;
  excerpt: string;
  date: string;
  timeReading: string;
};

const Post = ({
  href,
  title,
  picture,
  pictureAlt,
  excerpt,
  date,
  timeReading,
}: Props) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    {!!picture && (
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={picture}
          alt={pictureAlt}
        />
      </div>
    )}
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <Link to={href} className="block">
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">{excerpt}</p>
        </Link>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex flex-wrap text-sm leading-5 text-gray-500">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-1">&middot;</span>
          <span>{timeReading} de lecture</span>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
