import { JSX } from "react";

interface HeadingProps {
  title: string | JSX.Element;
  description: string | JSX.Element;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
