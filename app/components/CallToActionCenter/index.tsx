import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../data/routes";

type Props = {
  title: string;
  dark?: boolean;
};

const CallToActionCenter: FunctionComponent<Props> = ({ title, dark }) => (
  <div className={dark ? "bg-gray-900" : "bg-white"}>
    <div className="max-w-screen-xl mx-auto md:text-center py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2
        className={`text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div className="mt-8 sm:flex sm:justify-center">
        <Link
          to={ROUTES.contact.href}
          className="btn flex"
          data-mode="primary"
          data-size="big"
        >
          Formulaire de contact
        </Link>
        <a
          href="mailto:contact@thibaud-duthoit.fr"
          className="btn flex mt-3 sm:mt-0 sm:ml-3"
          data-mode="light"
          data-size="big"
        >
          contact@thibaud-duthoit.fr
        </a>
      </div>
    </div>
  </div>
);

export default CallToActionCenter;
