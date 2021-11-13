import * as React from "react";
import type { Project as ProjectProps } from "../../data/projects";

const Project = ({
  labels = [],
  title,
  year,
  done = [],
  description,
}: ProjectProps) => (
  <div className="rounded-lg shadow-lg overflow-hidden mb-4">
    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
      <div className="mb-4 flex items-baseline flex-wrap text-4xl leading-none font-extrabold">
        {title}
        <span className="ml-1 text-xl leading-8 font-medium text-gray-500">
          /{year}
        </span>
      </div>

      {labels.map((label) => (
        <span
          key={label}
          className="inline-block my-1 mr-1 px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide bg-blue-100 text-blue-600"
        >
          {label}
        </span>
      ))}

      {!!description && (
        <p className="mt-5 text-lg leading-7 text-gray-500">{description}</p>
      )}
    </div>
    <div className="h-full px-6 pt-2 pb-8 bg-gray-50 sm:px-10">
      <ul>
        {done.map((item) => (
          <li key={item} className="mt-4 flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-green-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="ml-3 text-base leading-6 text-gray-700">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Project;
