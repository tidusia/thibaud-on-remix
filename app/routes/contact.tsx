import React from "react";
import Nav from "../components/Nav";
import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  const title = "Formulaire de contact | Thibaud Duthoit";
  const description =
    "Le moyen le plus simple de me contacter, soit via le formulaire, soit directement par email.";
  return { title, description };
};

export default function Contact() {
  return (
    <div>
      <Nav />
      <h1>Contact page</h1>
    </div>
  );
}
