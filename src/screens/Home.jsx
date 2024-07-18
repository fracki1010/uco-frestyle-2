import { CarouselBody } from "../components/Carousel";
import ReactPlayer from "react-player/youtube";
import { CardMember } from "../components/Card";

import imgCarousel1 from "../assets/evento-1.jpg";
import imgCarousel2 from "../assets/evento-2.jpg";
import imgCarousel3 from "../assets/evento-3.jpg";
import imgCarousel4 from "../assets/evento-4.jpg";

import imgCard1 from "../assets/event-card.jpg";
import imgCard2 from "../assets/event-card-2.jpg";
import imgCard3 from "../assets/event-card-3.jpg";
import imgCard4 from "../assets/event-card-5.jpg";

let imagesCarousel = [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4];


export function Home(){
  return (
    <div className=" h-full">
        <CarouselBody array={imagesCarousel}></CarouselBody>

        <section className=" flex w-full h-auto place-content-center">
          <ReactPlayer
            className=" p-12"
            url={"https://www.youtube.com/watch?v=9RdrIkmfMh0"}
            playing={true}
            loop
            height={600}
            width={1000}
          />
        </section>
        <h2 className="playwrite-ie-uniquifier text-3xl m-5 text-center p-10 font-bold sm:text-6xl">
          Membresias
        </h2>
        <section className=" p-1 flex flex-wrap gap-20 place-content-center mt-5">
          <CardMember
            title={"Produccion Audiovisual"}
            textBody={
              "grabación de audio y video.Con esta inversión el artista contara con una sala de ensayo, contactos, participación en distintos show's, carne VIP para asistir a los encuentros realizados por la productora "
            }
            array={["Pago de contado", "Por cuotas", "Presupuestos personales", "Grabaciones de audio y video"]}
            imageUrl={imgCard2}
            className=" w-1/3"
            price={3400}
          />

          <CardMember
            title={"Seguidores y  público"}
            array={["", "Pedro", "Marco", "Matias"]}
            textBody={
              "Para las personas que disfrutan de  diversos show, está membresía te permita pasar a los encuentros realizados por la productora. Ya sean obras de teatros, bandas en vivo, noches de karaoke, eventos urbanos etc. También podrán contar con descuentos en los distintos locales con los cuales tengamos acuerdos o sean sponsors de la firma."
            }
            imageUrl={imgCard1}
            className=" w-1/3"
            price={4500}
          />

          <CardMember
            title={"Organizaciones"}
            array={["Sonido", "Luces", "Fotografias", "Videoclips", "Equipo de trabajo", "DJ's"]}
            textBody={'Gran oportunidad para gestores de eventos, profesores y organizadores emergentes. Esta membresía te permitirá gestionar todos los aspectos técnicos.'}
            imageUrl={imgCard3}
            className=" w-1/3"
            price={6400}
          />
          <CardMember
            title={"Eventos Sociales"}
            array={["Casamientos", "Baby Shower", "Cumpleanos Infantiles", "Cumpleaños de 15"]}
            textBody={'Increíble oportunidad para familias. Esta membresía te permite planificar y presupuestar cualquier tipo de fiesta que desees'}
            imageUrl={imgCard4}
            className=" w-1/3"
            price={9700}
          />
        </section>
      </div>
  )
}
