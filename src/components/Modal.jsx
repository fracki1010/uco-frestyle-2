import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsXCircle } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export function ModalEvent({ condition, title, price, listBenefits }) {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(!openModal);
  }, [condition]);

  //creacion de la lista
  let listContent = [];
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < listBenefits.length; i++) {
    listContent.push(
      <li key={i} className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-orange-600 dark:text-orange-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {listBenefits[i]}
        </span>
      </li>
    );
  }

  return (
    <>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} >
        <div className="bg-gradient-to-b  to-black text-white rounded-md">
          <div className=" w-full flex place-content-end">
            <BsXCircle className=" mt-4 me-4 text-3xl cursor-pointer hover:text-red-600" onClick={() => setOpenModal(false)}/>
          </div>

          <Modal.Body>
            <div className="space-y-6 px-6 rounded-2xl">
              <h5 className="mb-4 text-2xl md:text-3xl font-extrabold text-center text-gray-200 dark:text-gray-400 rock-salt-regular">
                {title}
              </h5>
              <div className="flex items-baseline text-gray-200 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-4xl font-extrabold ">
                  {price}
                </span>
                <span className="ml-1 text-xl font-normal text-gray-200 dark:text-gray-400">
                  /Pesos
                </span>
              </div>
              <ul className="my-7 space-y-5">{listContent}</ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-orange-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:bg-orange-300 dark:focus:ring-cyan-900"
                onClick={() => setOpenModal(false)}
              >
                Adquirir
              </button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
