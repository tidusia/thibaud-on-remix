import React from "react";
import { LinksFunction, Outlet } from "remix";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArticleFooter from "../components/ArticleFooter";
import prismStylesUrl from "../styles/prism.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: prismStylesUrl }];
};

export default function Blog() {
  const location = useLocation();
  const isBlogPost = /^\/blog\/.+$/i.test(location.pathname);

  return (
    <div>
      <header className="max-w-screen-xl mx-auto mb-6">
        <Nav />
      </header>

      {isBlogPost ? (
        <>
          <article className="article-page mx-auto px-4 py-12">
            <Outlet />
          </article>
          <ArticleFooter />
        </>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}
