import * as React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  content?: React.ReactNode;
};

const Button = ({ className, onClick, content }: ButtonProps): JSX.Element => (
  <button
    className={clsx(className, "font-bold bg-blue-600 text-white px-4 py-2")}
    onClick={onClick}
  >
    {content}
  </button>
);

export default Button;
