import * as React from "react";

type Stat = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  subtitle?: string;
  stats: Array<Stat>;
};

type StatItemProps = Stat & {
  index: number;
  lastIndex: number;
};

const StatItem = ({ value, label, index, lastIndex }: StatItemProps) => {
  let rootClassName;

  if (index === 0) {
    rootClassName =
      "border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r";
  } else if (index === lastIndex) {
    rootClassName =
      "border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l";
  } else {
    rootClassName =
      "border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r";
  }

  return (
    <div className={rootClassName}>
      <p className="text-5xl leading-none font-extrabold text-blue-500">
        {value}
      </p>
      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
        {label}
      </p>
    </div>
  );
};

const Stats = ({ title, subtitle, stats = [] }: Props) => (
  <div className="bg-gray-50 pt-12 sm:pt-16">
    <div className="max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 md:text-center">
      <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 whitespace-pre-line">
        {title}
      </h2>
      <p className="max-w-xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
        {subtitle}
      </p>
    </div>
    <div className="max-w-screen-xl mx-auto my-8 sm:-mt-8 sm:mb-0 px-4 sm:px-6 lg:px-8 sm:transform sm:translate-y-1/2">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          {/* CSS designed for 3 items */}
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
              lastIndex={stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default Stats;
