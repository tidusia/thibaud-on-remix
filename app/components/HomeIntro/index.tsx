import React from "react";
import { Link } from "remix";
import Nav from "../Nav";
import ROUTES from "../../data/routes";

const HomeIntro = () => (
  <header className="relative bg-white overflow-hidden">
    <div className="max-w-screen-xl mx-auto ">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Nav />

        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none">
              Ensemble, concevons
              <br className="" />
              <span className="text-blue-500">un produit web innovant</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bonjour, je suis Thibaud Duthoit.
              <br />
              Développeur front-end freelance, spécialisé en React.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#references"
                  className="w-full btn"
                  data-mode="primary"
                  data-size="big"
                >
                  Mes références
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  prefetch="intent"
                  to={ROUTES.contact.href}
                  className="w-full btn"
                  data-mode="light"
                  data-size="big"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center lg:justify-end xl:justify-center items-center p-8 bg-gray-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="rounded-full border-white border-4 sm:border-8 w-32 sm:w-48 lg:w-64"
        src="/images/thibaud-duthoit.jpg"
        alt="Thibaud Duthoit"
      />
    </div>
  </header>
);

export default HomeIntro;
