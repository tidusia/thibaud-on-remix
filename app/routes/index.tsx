import * as React from "react";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../styles/index.css";

export const meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

export default function Index() {
  const data = useLoaderData();
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://docs.remix.run">Check out the docs</a> to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count : {count}
      </button>
      <p>
        <Link to="not-found">Link to 404 not found page.</Link> Clicking this
        link will land you in your root CatchBoundary component.
      </p>
    </div>
  );
}
