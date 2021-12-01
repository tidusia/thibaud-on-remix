import React from "react";
import DotsGrid from "../DotsGrid";
import LogoReact from "../LogoReact";
import { yearsWorking } from "~/data/hours-working";
import projects from "../../data/projects";

const ShowCase = () => (
  <section className="py-16 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <DotsGrid rootClassNames="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" />

      <div className="relative">
        <h2 className="lg:text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Vous cherchez un développeur de confiance ?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto lg:text-center text-xl leading-7 text-gray-500">
          Passionné par le développement web, je suis disponible pour vous
          accompagner sur tout le front-end de votre projet : intégration,
          architecture, connexion back-end et stratégie de tests.
        </p>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            En {yearsWorking} ans, j'ai accompagné plus
            <span className="block font-bold text-blue-500">
              de{" "}
              {projects.reduce(
                (total, project) =>
                  project.isStartup ? total + project.nbOfClients : total,
                0,
              )}{" "}
              projets startups
            </span>
          </h3>
          <p className="mt-3 text-lg leading-7 text-gray-500">
            Ma plus-value, c'est ma passion pour le code de qualité, sans bugs
            et bien testé. Avec moi, vous aurez l'assurance d'un produit de
            grande qualité technique et facilement maintenable sur le long
            terme.
          </p>

          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <LogoReact className="w-12" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Spécialisé en React.js
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    J'ai eu la chance de travailler sur plus d'une dizaine de
                    projets en React.js ou React Native. Aujourd'hui, je préfère
                    me concentrer sur React.js, pour le web uniquement. C'est ce
                    qui me permet d'être très efficace et d'apporter une réelle
                    expertise.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Intégration au pixel perfect
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Généralement, les designers aiment travailler avec moi. Je
                    suis capable de comprendre les enjeux derrière leurs
                    maquettes et de les reproduire avec une extrême fidélité.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Collaboration au sein d'une équipe
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Vous avez surement besoin de quelqu'un capable d'intégrer
                    une équipe déjà en place. Ça tombe bien, c'est ce qui me
                    convient le mieux ! J'ai l'habitude de débarquer sur des
                    projets en cours pour du renfort, ou bien de poser une
                    architecture en concertation avec d'autres développeurs
                    expérimentés.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0">
          <div className="relative mx-auto text-blue-500">
            <LogoReact className="w-full" />
            <h2 className="text-center text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl sm:leading-9">
              Ma spécialisation :{" "}
              <strong className="font-bold text-blue-500">React</strong>
            </h2>
          </div>
        </div>
      </div>

      <DotsGrid rootClassNames="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" />

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Un de mes derniers projets :
              <span className="block font-bold text-green-700">
                la start-up Agricool
              </span>
            </h3>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Agricool avait besoin d'un bon dev front à l'aise avec Next.js
              (framework React), TypeScript pour se brancher sur le headless CMS
              Prismic.io en GraphQL, en améliorant autant que possible les
              performances dans une optique d'éco-conception.
            </p>

            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Intégration des vues
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      En quelques jours, j'ai intégré les 9 vues sur le Figma au
                      pixel perfect qui ont ensuite été validées par le
                      designer. J'ai choisi Storybook pour m'aider dans la
                      création des composants React. J'ai aussi prévu le
                      découpage de certains blocs afin d'être compatible avec
                      les Slices de Prismic.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Branchement CMS Prismic
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      En collaboration avec le lead-dev d'Agricool, j'ai créer
                      les différents types de pages dans Prismic, généré des
                      données initiales depuis le back-office que j'ai ensuite
                      récupérées à l'aide de GraphQL.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Éco-conception
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Un des enjeux de la mission était de réaliser un site
                      performant, accessible, avec un excellent score sur
                      Lighthouse. La startup étant engagée dans la lutte contre
                      le réchauffement climatique, j'ai pu mettre en oeuvre de
                      nombreuses bonnes pratiques d'éco-conception sur le
                      projet.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <img
              className="relative mx-auto"
              width="550"
              src="/images/agricool-showcase.jpg"
              alt="Maquettes de la dernière version du site Agricool dont Thibaud Duthoit a réalisé l'intégration et le front-end."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowCase;
