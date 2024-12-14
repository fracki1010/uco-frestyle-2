import { BoldText } from "../components/BoldText.jsx";
import { data } from "../data/data.js";
import { useParams } from "react-router-dom";

import whatsapp from "../assets/whatsapp.png";

// eslint-disable-next-line react/prop-types
export const Package = () => {
  const idService = useParams().serviceId;
  const idPackage = useParams().packageId;

  //Obteniendo el servicio
  const dataServices = data.services;
  const dataServicesId = Object.values(dataServices).find(
    (data) => data.id == idService
  )

  //Obteniendo el paquete
  const dataPackageId = Object.values(dataServicesId.package).find(
    (data) => data.id == idPackage
  ) ?? ''

  // const dataPackage = dataServicesId.package ?? [];

  //Mensaje y numero de wpp
  const messageWpp = dataPackageId.messageWpp.message || data.menssageWpp.text;
  const numberPhone = dataPackageId.messageWpp?.phone || data.menssageWpp.phone;

  

  return (
    <>
      <section className=" rubik-mono-one-regular">
        <div className=" flex justify-center">
          <h1 className=" bg-blue-700 text-3xl font-bold text-center m-20 animate-wiggle max-w-fit p-5">
            {dataPackageId.title}
          </h1>
        </div>
        {/* {dataPackage.length != 0
          ? <div className=" m-20 flex flex-wrap gap-10 justify-center">
            
            {dataPackage.map((e, index) => {
              return (

                <div key={index} className=" m-2">

                  <CardEvent3 id={`./package/${e.id}`} key={index} title={e.title} image={e.image} />
                </div>

              );
            })}
          </div>
          : <></>
        } */}
        <div className=" m-7">
          <p className="flex justify-center text-center">
            {dataPackageId.description}
          </p>
        </div>

        <div className=" m-1 md:m-6 p-3 md:p-10">
          {dataPackageId.benefits.map((e, i) => (
            <div className="mb-4 bg-black rounded-2xl p-5" key={i}>
              <BoldText text={e} />
            </div>
          ))}
        </div>
        <div

          className=" m-5 p-5 flex flex-row flex-wrap justify-around "
        >

        </div>
      </section>

        {/* //whatsapp */}
      <section className=" m-10 flex justify-center ">
      <div>
          <img
            src={whatsapp}
            alt="whatsapp"
            className=" max-w-52 w-36 md:w-52 md:m-14 animate-bounce"
          />
        </div>
        <div className="flex flex-col self-center">
          <h3 className="text-2xl font-bold m-5">
            Adquiri esta membresia ahora!
          </h3>

          <button
            onClick={() => {
              window.location.href = `https://api.whatsapp.com/send?phone=${numberPhone}&text=${messageWpp}${dataPackageId.title}`;
            }}
            type="button"
            className="  text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            WhatsApp
          </button>
        </div>
      </section>
    </>
  );
};


