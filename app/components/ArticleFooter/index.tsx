import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { yearsWorking } from "../../data/hours-working";

export type ArticleFooterProps = {
  className?: string;
};

const ArticleFooter = ({ className }: ArticleFooterProps): JSX.Element => (
  <section
    className={clsx(
      className,
      "py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24",
    )}
  >
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <svg
        className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        role="img"
      >
        <defs>
          <pattern
            id="ad119f34-7694-4c31-947f-5c9d249b21f3"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
        />
      </svg>

      <div className="relative">
        <blockquote>
          <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <footer className="mb-8 md:flex md:items-center md:justify-center">
              <img
                className="mx-auto h-40 w-40 rounded-full"
                src="/images/thibaud-duthoit.jpg"
                alt="Profil de Thibaud Duthoit, développeur front-end spécialisé en React.js"
              />
            </footer>
            <p>
              Je m'appelle Thibaud Duthoit, et je suis développeur front-end
              depuis {yearsWorking}&nbsp;ans, spécialisé en intégration et en
              React.js.
            </p>
            <p className="mt-4">
              Si vous cherchez un développeur passionné, je serais ravi de{" "}
              <Link to="/contact" className="text-blue-500 underline">
                prendre&nbsp;contact
              </Link>{" "}
              avec vous.
            </p>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
);

export default ArticleFooter;
