import * as React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  content?: React.ReactNode;
  mode?: "primary" | "light";
  size?: "big";
};

const Button = ({
  className,
  onClick,
  content,
  mode,
  size,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(className, "btn")}
      data-mode={mode}
      data-size={size}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
