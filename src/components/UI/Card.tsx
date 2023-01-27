import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className = "", children }: Props) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
