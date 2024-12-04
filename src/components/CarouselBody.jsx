import { Carousel } from "flowbite-react";

// eslint-disable-next-line react/prop-types
export function CarouselBody({ array, text }) {
  let images = [];
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < array.length; i++) {
    images.push(
      <div key={i} className="relative">

        <img className="" key={i} src={array[i]} alt="..."></img>

        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-transparent flex items-start ">

        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
      <h2 className="absolute  text-white text-lg sm:text-xl font-bold  px-4 py-2 rounded-md z-10">
      {text}
      </h2>
        <Carousel leftControl=" " rightControl=" ">
          {images}
        </Carousel>
    </div>
  );
}
