import React from "react";

type Props = {
  picture: string;
  name: string;
  position?: string;
  content: string;
  reverse?: boolean;
};

const Testimonial = ({
  picture,
  name,
  position,
  content,
  reverse = false,
}: Props) => (
  <div className="bg-white overflow-hidden">
    <div className="relative max-w-xl lg:max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
      <svg
        className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${
          reverse ? "left-full -translate-x-1/2" : "right-full translate-x-1/2"
        }`}
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
        />
      </svg>

      <div
        className={`relative lg:flex lg:items-center ${
          reverse && "lg:flex-row-reverse lg:text-right"
        }`}
      >
        <div className="hidden lg:block lg:flex-shrink-0">
          <img className="h-48 w-48 rounded-full" src={picture} alt={name} />
        </div>

        <div className={`relative ${reverse ? "lg:mr-10" : "lg:ml-10"}`}>
          <svg
            className={`absolute z-0 top-0  transform  -translate-y-24 h-36 w-36 text-indigo-200 opacity-50 ${
              reverse
                ? "-translate-x-8 left-0 lg:translate-x-8 lg:right-0 lg:left-auto"
                : "-translate-x-8 left-0"
            }`}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
          >
            <path
              strokeWidth="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote>
            <div className="relative z-10 text-2xl leading-9 font-medium text-gray-900 max-w-4xl">
              <p>{content}</p>
            </div>
            <footer className="mt-8">
              <div className={`flex ${reverse && "lg:justify-end"}`}>
                <div className="flex-shrink-0 lg:hidden">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={picture}
                    alt={name}
                  />
                </div>
                <div className="ml-4 lg:ml-0">
                  <div className="text-base leading-6 font-medium text-gray-900">
                    {name}
                  </div>
                  {!!position && (
                    <div className="text-base leading-6 font-medium text-green-400">
                      {position}
                    </div>
                  )}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
