/* eslint-disable react/no-unknown-property */
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CardEvent3 = ({ title, image, id }) => {
  return (
    <Card
      className="max-w-sm bg-transparent"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-400 dark:text-white rubik-mono-one-regular">
        {title}
      </h5>
      <Link
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate-bounce cursor-pointer"
        to={`./${id}`}
      >
        MAS INFORMACION
       

      </Link>
    </Card>
  );
};
