import * as React from "react";
import Project from "../Project";
import { Project as ProjectType } from "../../data/projects";

type Props = {
  title: string;
  id: string;
  heading?: string;
  subtitle?: string;
  projects: Array<ProjectType>;
};

const Projects = ({ heading, title, subtitle, projects, id }: Props) => (
  <div className="bg-gray-900 sm:pt-16">
    <div
      id={id}
      className="max-w-xl md:max-w-screen-lg mx-auto pt-12 sm:pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="md:text-center ">
        {!!heading && (
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            {heading}
          </h2>
        )}
        <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
          {title}
        </p>
        {!!subtitle && (
          <p className="mt-2 text-xl leading-7 text-gray-300">{subtitle}</p>
        )}
      </div>
      <div className="mt-8 pb-12 sm:mt-12 lg:mt-16 md:grid md:grid-cols-2 md:gap-5 lg:gap-12">
        {projects.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
