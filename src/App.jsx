import "./App.css";
import { Nav } from "./components/Nav";
import { CarouselBody } from "./components/Carousel";
import logo from "./assets/logo.jpg";
import ReactPlayer from "react-player/youtube";
import { CardMember } from "./components/Card";
import { FooterUco } from "./components/Footer";

import imgCarousel1 from "./assets/evento-1.jpg";
import imgCarousel2 from "./assets/evento-2.jpg";
import imgCarousel3 from "./assets/evento-3.jpg";
import imgCarousel4 from "./assets/evento-4.jpg";

import imgCard1 from "./assets/event-card.jpg";
import imgCard2 from "./assets/event-card-2.jpg";
import imgCard3 from "./assets/event-card-3.jpg";

function App() {
  let imagesCarousel = [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4];

  return (
    <>
      <header>
        <Nav img={logo}></Nav>
      </header>
      <body className="bg-gradient-to-t from-orange-800 from-10% to-black to-70% h-full">
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
        <h2 className="playwrite-ie-uniquifier text-6xl m-5 text-center p-10 font-bold">Membresias</h2>
        <section className=" p-1 flex flex-wrap gap-20 place-content-center mt-5">
          <CardMember
            title={"Produccion Audiovisual"}
            price={10}
            textBody={"grabación de audio y video.Con esta inversión el artista contara con una sala de ensayo, contactos, participación en distintos show's, carne VIP para asistir a los encuentros realizados por la productora "}
            array={["Pepe", "Pedro", "Marco", "Matias"]}
            imageUrl={imgCard1}
            className=" w-1/3"
          />

          <CardMember
            title={"Seguidores y público"}
            price={10}
            array={["Pepe", "Pedro", "Marco", "Matias"]}
            textBody={"Para las personas que disfrutan de  diversos show, está membresía te permita pasar a los encuentros realizados por la productora. Ya sean obras de teatros, bandas en vivo, noches de karaoke, eventos urbanos etc. También podrán contar con descuentos en los distintos locales con los cuales tengamos acuerdos o sean sponsors de la firma."}
            imageUrl={imgCard2}
            className=" w-1/3"
          />

          <CardMember
            title={"Chau"}
            price={10}
            array={["Pepe", "Pedro", "Marco", "Matias"]}
            imageUrl={imgCard3}
            className=" w-1/3"
          ></CardMember>
        </section>
      <footer className=" m-6 rounded-2xl">
        <FooterUco></FooterUco>
      </footer>
      </body>
    </>
  );
}

export default App;
