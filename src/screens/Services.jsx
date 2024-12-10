import { data } from "../data/data";
//import { BoldText } from "../components/BoldText";

import { CardEvent3 } from "../components/CardEvent3";

export const Services = () => {
  const dataServices = data.services;

  return (
    <div className="flex flex-row gap-10 flex-wrap p-3 justify-center">
      {Object.values(dataServices).map((obj, index) => (
        <CardEvent3 key={index} id={obj.id} title={obj.title} image={obj.image}></CardEvent3>
      ))}
    </div>
  );
};
