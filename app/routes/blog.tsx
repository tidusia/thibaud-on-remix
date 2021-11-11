import React from "react";
import Nav from "../components/Nav";
import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  const title = "Le Blog | Thibaud Duthoit";
  const description =
    "En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire.";
  return { title, description };
};

export default function Contact() {
  return (
    <div>
      <Nav />
      <h1>Blog</h1>
    </div>
  );
}
