import * as React from "react";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Nav from "../components/Nav";

export const meta: MetaFunction = () => {
  const title = "Thibaud Duthoit | Développeur React Freelance";
  const description =
    "Vous cherchez un développeur de confiance ? Passionné par le développement web, je suis disponible pour vous accompagner sur tout le front-end de votre projet : intégration, architecture, connexion back-end et stratégie de tests.";
  return {
    title,
    description,
    "og:title": title,
    "og:description": description,
    "og:type": "website",
    "og:url": "https://www.thibaud-duthoit.fr/",
    "twitter:creator": "@thibaud_duthoit",
  };
};

export const loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

export default function Index() {
  const data = useLoaderData();
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <Nav />

      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://docs.remix.run">Check out the docs</a> to get started.
      </p>
      <p>Message from the loader: {data.message}</p>

      <Button
        className="btn"
        onClick={() => setCount((prevState) => prevState + 1)}
        content={`Count : ${count}`}
        mode="primary"
        size="big"
      />

      <p className="font-bold text-2xl">This text is styled with tailwind !</p>
      <p>
        <Link to="not-found">Link to 404 not found page.</Link> Clicking this
        link will land you in your root CatchBoundary component.
      </p>
    </div>
  );
}
