import * as article1 from "../routes/blog/comment-faire-ce-que-on-aime-en-gagnant-bien-sa-vie.mdx";
import * as article2 from "../routes/blog/comprendre-differents-types-tests.mdx";
import * as article3 from "../routes/blog/comprendre-formulaire-controle-avec-des-pizzas.mdx";
import * as article4 from "../routes/blog/etre-freelance-c-est-la-vie.mdx";
import * as article5 from "../routes/blog/javascript-a-savoir-pour-react.mdx";
import * as article6 from "../routes/blog/mais-pourquoi-diable-passer-certification-qualite-web.mdx";
import * as article7 from "../routes/blog/tester-ses-reducer-react-redux-jest.mdx";
import * as article8 from "../routes/blog/un-bon-developpeur.mdx";
import ROUTES from "./routes";

export type ArticleFrontMatter = {
  meta: {
    title: string;
    description: string;
  };
  date: string;
  timeReading: string;
  picture?: {
    url: string;
    alt: string;
    credits?: {
      type: string;
      name: string;
      link: string;
    };
  };
};

export type ArticleModule = {
  attributes: ArticleFrontMatter;
  filename: typeof article1.filename;
  slug: string;
  href: string;
};

const ARTICLES: Array<ArticleModule> = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
]
  .map((article) => {
    const slug = article.filename.replace(/.mdx?$/, "");
    const href = `${ROUTES.blog.href}/${slug}`;
    return {
      attributes: {
        ...article.attributes,
      },
      filename: article.filename,
      slug,
      href,
    };
  })
  .sort((a, b) => ("" + b.attributes.date).localeCompare(a.attributes.date));

export default ARTICLES;
