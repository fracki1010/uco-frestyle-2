/* eslint-disable react/prop-types */
import imgCarousel1 from "../assets/evento-1.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const CardServices = ({ title, image = imgCarousel1, id }) => {
  return (
    <div className="flex justify-center rounded-2xl cursor-pointer">
      <div className=" h-[28rem] w-80 rotate-0 space-y-6 rounded-2xl bg-gray-100  transition duration-300 hover:rotate-6">
        <div className=" h-full w-auto ">
          <div className="absolute inset-0 bg-gradient-to-b rounded-2xl from-black/40 via-black/50 to-black/10"></div>
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className=" absolute inset-0 flex flex-col flex-1 place-content-between">
          <div className=" flex justify-center">
            <img
              className=" rounded-full size-20 bg-center animate-bounce m-4"
              src={logo}
              alt=""
            />
          </div>

          <div>
            <p className="text-center text-wrap text-4xl font-extrabold text-gray-200 my-8">
              {title}
            </p>
          </div>

          <footer className="mb-10 flex justify-center">
            <Link
              to={`./${id}`}
              className="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-lg font-bold text-white hover:bg-[#FF7308]"
            >
              <span>Comenza Ya!</span>
              <i className="fas fa-hand-peace text-xl"></i>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};
