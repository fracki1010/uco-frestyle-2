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

  //obtiene el link si es que existe
  const getLink = (platform) => {
    const linkObj = dataEventId.links.filter((e) => e.platform === platform)[0];
    const link = linkObj?.link; // Asegúrate de que linkObj existe antes de acceder a link
    
    return typeof link === 'string' && link.trim() !== '' ? link : 'no-hay-link';
  };

  
  //el link pasado a limpio
  const spotifyLink = getLink("spotify");
  const youtubeLink = getLink("youtube");

  console.log(spotifyLink);
  

  const spotifyIcon = (
    <BsSpotify
      className=" m-3 animate-wiggle cursor-pointer hover:animate-bounce"
      size={60}
      color="1db954"
      onClick={() => (window.location.href =  spotifyLink )}
    />
  );

  const youtubeIcon = (
    <BsYoutube
      className=" m-3 animate-wiggle cursor-pointer hover:animate-bounce"
      size={60}
      color="#FF0000"
      onClick={() => (window.location.href =  youtubeLink )}
    />
  );



  return (
    <>
      
      <section className="m-10">
        <section className="bg-gray-800 rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <img src={img} alt="Movie Poster" className="rounded-lg" />
              <div className="m-8 flex justify-around">
                {spotifyLink == "no-hay-link" ? "" : spotifyIcon}
                {youtubeLink == "no-hay-link" ? "" : youtubeIcon}
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
                alt="Evento photo"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Event Name</h4>
              <p className="text-gray-400 text-sm">Date</p>
            </div>

            <div className="flex-shrink-0 w-36">
              <img
                src="https://via.placeholder.com/180x270"
                alt="Evento photo"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Event Name</h4>
              <p className="text-gray-400 text-sm">Date</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
