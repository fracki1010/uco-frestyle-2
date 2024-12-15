import { BoldText } from "../components/BoldText.jsx";
import { data } from "../data/data.js";
import { useParams } from "react-router-dom";

import whatsapp from "../assets/whatsapp.png";
import { CardEvent3 } from "../components/CardEvent3.jsx";
import { TypeAnimation } from "react-type-animation";

// eslint-disable-next-line react/prop-types
export const Service = () => {
  const id = useParams().serviceId;
  const dataServices = data.services;

  const dataServicesId = Object.values(dataServices).find(
    (data) => data.id == id
  );

  //Mensaje y numero de wpp
  const messageWpp = data.menssageWpp.text;
  const numberPhone =
    dataServicesId.messageWpp?.phone || data.menssageWpp.phone;

  const dataPackage = dataServicesId.package ?? [];

  return (
    <>
      <section className=" rubik-mono-one-regular">
        <div className=" flex justify-center">
          {/* <h1 className=" bg-blue-700 text-3xl font-bold text-center m-20 animate-wiggle max-w-fit p-5">
            {dataServicesId.title}
          </h1> */}
          <div className="m-20  max-w-fit p-5   ">
            <TypeAnimation
              sequence={[
                
                dataServicesId.title,
                1000, 
                'UCO FRESTYLE PRESENTA',
                1000, 
                dataServicesId.title,
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className=" m-7">
          <p className="flex justify-center text-center">
            {dataServicesId.description}
          </p>
        </div>
        {dataPackage.length != 0 ? (
          <div className=" m-20 flex flex-wrap gap-10 justify-center">
            {dataPackage.map((e, index) => {
              return (
                <div key={index} className=" m-2">
                  <CardEvent3
                    id={`./package/${e.id}`}
                    key={index}
                    title={e.title}
                    image={e.image}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        <div className=" m-1 md:m-20 p-3 md:p-10">
          {dataServicesId.benefits.map((e, i) => (
            <div className="mb-4 bg-black rounded-2xl p-5" key={i}>
              <BoldText text={e} />
            </div>
          ))}
        </div>
      </section>

      {/* //whatsapp */}
      {
        dataServicesId.package.length == 0 

        ? (<section className=" m-10 flex justify-center ">
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
              window.location.href = `https://api.whatsapp.com/send?phone=${numberPhone}&text=${messageWpp}${dataServicesId.title}`;
            }}
            type="button"
            className="  text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            WhatsApp
          </button>
        </div>
      </section>)
    : <span className=" hidden"></span>  
    }
    </>
  );
};
