import clsx from "clsx";
import ROUTES from "../../data/routes";
import { Link } from "react-router-dom";
import * as React from "react";

export type NavProps = {
  className?: string;
};

const Nav = ({ className }: NavProps): JSX.Element => (
  <nav className={clsx(className)}>
    <ul className="flex">
      <li className="mr-4">
        <Link to={ROUTES.home.href}>{ROUTES.home.text}</Link>
      </li>
      <li className="mr-4">
        <Link to={ROUTES.blog.href}>{ROUTES.blog.text}</Link>
      </li>
      <li className="mr-4">
        <Link to={ROUTES.contact.href}>{ROUTES.contact.text}</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
