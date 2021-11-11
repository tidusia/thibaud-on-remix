import React from "react";
import { Outlet } from "remix";
import { useLocation } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArticleFooter from "../components/ArticleFooter";

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
