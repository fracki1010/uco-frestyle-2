import { data } from "../data/data";
//import { BoldText } from "../components/BoldText";
import { CardEvent2 } from "../components/CardEvent2";



export const Services = () => {
  const dataServices = data.services;

  console.log(dataServices);

  return (
    <div>

      {
      Object.values(dataServices).map((obj, index) => (
        index % 2 == 0  
        ? <CardEvent2 key={index} id={obj.id} title={obj.title} benefits={obj.benefits} location={obj.location} image={obj.image} description={obj.description} left={true}></CardEvent2>
        : <CardEvent2 key={index} id={obj.id} title={obj.title} benefits={obj.benefits} location={obj.location} image={obj.image} description={obj.description} left={false} ></CardEvent2>
        
      ))
      }

    </div>
  );
};
