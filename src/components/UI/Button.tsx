import React, { useEffect } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className = "", type, children, onClick }: Props) => {
  debugger;
  console.log("component");

  useEffect(() => {
    console.log("useeffect in button");
    debugger;
  }, []);

  return (
    <button
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
