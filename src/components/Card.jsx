/* eslint-disable react/prop-types */
/* import { Card } from "flowbite-react"; */
import { useState } from "react";
import { ModalEvent } from "./Modal";

export function CardMember({ title, array, imageUrl, price, textBody }) {
  

  

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl">
      <div className="h-96 w-[30rem]">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-xl md:text-3xl font-bold text-white rock-salt-regular">
          {title}
        </h1>
        <p className="mb-3 text-base md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {textBody}
        </p>

        <button
          className="rounded-full cursor-pointer bg-orange-600 py-2 px-3.5 font-com text-xs md:text-sm capitalize text-white shadow shadow-black/60 rock-salt-regular"
          onClick={() => setOpenModal(!openModal)}
        >
          Ver más
        </button>
      </div>
      <ModalEvent condition={openModal} listBenefits={array} title={title} price={price}></ModalEvent>
    </div>
  );
}
