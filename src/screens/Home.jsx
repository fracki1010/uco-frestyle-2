import { CarouselBody } from "../components/CarouselBody";
import ReactPlayer from "react-player/youtube";
import {BoldText} from '../components/BoldText'
import {ExpandableDiv} from '../components/ExpandableDiv'
import { data } from "../data/data";

import imgCarousel1 from "../assets/evento-1.jpg";
import imgCarousel2 from "../assets/evento-2.jpg";
import imgCarousel3 from "../assets/evento-3.jpg";
import imgCarousel4 from "../assets/evento-4.jpg";


let imagesCarousel = [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4];

export function Home() {
  return (
    <div className=" h-full">
      <CarouselBody array={imagesCarousel}></CarouselBody>

      <section className=" p-8">
        <span className=" text-3xl pe-16 ultra-regular">Quiénes Somos</span>
        <ExpandableDiv  className=" p-10">
         <BoldText  text={data.home.quienesSomos1}/>
         <br />
         <BoldText  text={data.home.quienesSomos2}/>
         <br />
         <BoldText  text={data.home.quienesSomos3}/>

        </ExpandableDiv>
      </section>

      <section className=" flex w-full h-auto place-content-center">
        <ReactPlayer
          className=" p-12"
          url={"https://www.youtube.com/watch?v=9RdrIkmfMh0"}
          playing={false}
          loop
          height={600}
          width={1000}
        />
      </section>


      {/* <section className=" p-1 flex flex-wrap gap-20 place-content-center mt-5">
        <CardMember
          title={"Produccion Audiovisual"}
          textBody={
            "grabación de audio y video.Con esta inversión el artista contara con una sala de ensayo, contactos, participación en distintos show's, carne VIP para asistir a los encuentros realizados por la productora "
          }
          array={[
            "Pago de contado",
            "Por cuotas",
            "Presupuestos personales",
            "Grabaciones de audio y video",
          ]}
          imageUrl={imgCard2}
          className=" w-1/3"
          price={3400}
        />

        <CardMember
          title={"Seguidores y público"}
          array={["", "Pedro", "Marco", "Matias"]}
          textBody={
            "Para las personas que disfrutan de  diversos show, está membresía te permita pasar a los encuentros realizados por la productora. Ya sean obras de teatros, bandas en vivo, noches de karaoke, eventos urbanos etc. También podrán contar con descuentos en los distintos locales con los cuales tengamos acuerdos o sean sponsors de la firma."
          }
          imageUrl={imgCard1}
          className=" w-1/3"
          price={4500}
        />

        <CardMember
          title={"Organizaciones"}
          array={[
            "Sonido",
            "Luces",
            "Fotografias",
            "Videoclips",
            "Equipo de trabajo",
            "DJ's",
          ]}
          textBody={
            "Gran oportunidad para gestores de eventos, profesores y organizadores emergentes. Esta membresía te permitirá gestionar todos los aspectos técnicos."
          }
          imageUrl={imgCard3}
          className=" w-1/3"
          price={6400}
        />
        <CardMember
          title={"Eventos Sociales"}
          array={[
            "Casamientos",
            "Baby Shower",
            "Cumpleanos Infantiles",
            "Cumpleaños de 15",
          ]}
          textBody={
            "Increíble oportunidad para familias. Esta membresía te permite planificar y presupuestar cualquier tipo de fiesta que desees"
          }
          imageUrl={imgCard4}
          className=" w-1/3"
          price={9700}
        />
      </section> */}
    </div>
  );
}
