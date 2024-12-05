import { TabCard } from "./TabCard";
import backgroundImage from "../assets/fondo-card.jpg";
/* eslint-disable react/prop-types */

export const CardEvent2 = ({
  id,
  title,
  image,
  benefits,
  location,
  description,
  left,
}) => {
  //if (left === true) {

  const classReverse = left == true ? `md:flex-row-reverse` : "md:flex-row";
  return (
    <div className=" max-w-md bg-white text-white rounded-xl shadow-md overflow-hidden md:max-w-full md:h-96 m-10">
      <div className={`flex sm:flex-col ${classReverse} h-full `} style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

          }}>
        <div className="h-64 md:h-auto md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-80"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-4 md:p-8 overflow-y-auto flex-1 bg-black bg-opacity-50 ">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {location}
          </div>
          <a
            href="#"
            className="block mt-1 mb-2 text-xl leading-tight font-medium text-gray-400  hover:underline ultra-regular"
          >
            {title}
          </a>
          <TabCard
            key={id}
            title1="Descripcion"
            text1={description}
            title2="Beneficios"
            text2={benefits}
          />
        </div>
      </div>
    </div>
  );
};
