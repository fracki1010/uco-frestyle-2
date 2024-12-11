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
          url={"https://youtu.be/8OKSvmtH4xY?si=znFaIvEoSMKzbMp8"}
          playing={false}
          loop
          height={600}
          width={1000}
        />
      </section>


    </div>
  );
}
