import { data } from "../data/data";
//import { BoldText } from "../components/BoldText";

//import { CardEvent3 } from "../components/CardEvent3";
import { CardServices } from "../components/CardServices";


export const Services = () => {
  const dataServices = data.services;

  return (
    <>
    <h1 className=' m-16 text-4xl font-bold rubik-mono-one-regular' >Ahora te mostramos todos nuestros servicios</h1>
    <div className="flex flex-row gap-10 flex-wrap p-3 justify-center mt-20">
      {/* {Object.values(dataServices).map((obj, index) => (
        <CardEvent3 key={index} id={obj.id} title={obj.title} image={obj.image}></CardEvent3>
      ))} */}
      {Object.values(dataServices).map((obj, index) => (
        <CardServices key={index} id={obj.id} title={obj.title} image={obj.image} ></CardServices>
      ))}
    </div>
      </>
  );
};
