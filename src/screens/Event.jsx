/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import { data } from "../data/data.js";
import img from "../assets/images/evento1.jpg";
import { BoldText } from "../components/BoldText.jsx";
import { BsSpotify, BsYoutube } from "react-icons/bs";

export const Event = () => {
  const id = useParams().id;
  const dataEvents = data.events;

  const dataEventId = Object.values(dataEvents).find((data) => data.id == id);

  const dataDescriptionEvent = dataEventId.description;

  return (
    <>
      {/* <section>
        <h1 className=" text-center text-3xl font-semibold">
          🎤✨ UCO FREESTYLE PRESENTA ✨🎤
        </h1>

        <h1 className=" text-center text-4xl font-bold my-10 playwrite-ie-uniquifier text-orange-700">
          {dataEventId.title.toUpperCase()}
        </h1>
      </section>
      <section className=" flex flex-col sm:flex-row flex-wrap gap-1">
        

        <div className=" w-72 justify-center ">
          <img src={img} alt="" className=" w-96 rounded-2xl   bg-red-800" />
        </div>
        <div className=" h-96 flex-1">
          {dataDescriptionEvent.map((data, index) => {
            return (
              <div key={index} className=" my-10 text-3xl">
                <BoldText text={data}>{console.log(data)}</BoldText>
              </div>
            );
          })}
        </div>
      </section> */}
      <section className="m-10">
        <section className="bg-gray-800 rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <img src={img} alt="Movie Poster" className="rounded-lg" />
              <div className="m-8 flex justify-around">
                <BsSpotify className=" m-3 animate-wiggle cursor-pointer hover:animate-bounce" size={60} color='1db954' />
                <BsYoutube className=" m-3 animate-wiggle cursor-pointer hover:animate-bounce" size={60} color="#FF0000" />
              </div>
            </div>

            <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold mb-2 ms-3 mt-3 rock-salt-regular  ">
                {dataEventId.title.toUpperCase()}
              </h2>

              {dataDescriptionEvent.map((data, index) => {
                return (
                  <p key={index} className="text-gray-400 mb-4">
                    <BoldText text={data}></BoldText>
                  </p>
                );
              })}
              
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4 ">Otros Eventos</h3>
          <div className="flex space-x-4">
            <div className="flex-shrink-0 w-36">
              <img
                src="https://via.placeholder.com/180x270"
                alt="Actor Photo"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Actor Name</h4>
              <p className="text-gray-400 text-sm">Character Name</p>
            </div>

            <div className="flex-shrink-0 w-36">
              <img
                src="https://via.placeholder.com/180x270"
                alt="Actor Photo"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Actor Name</h4>
              <p className="text-gray-400 text-sm">Character Name</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
