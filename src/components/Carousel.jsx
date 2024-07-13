

import { Carousel } from "flowbite-react";

// eslint-disable-next-line react/prop-types
export function CarouselBody({array}) {

  let images = [];
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < array.length; i++) {
    images.push(<img key={i} src={array[i]} alt="..." />);
  }

  return (
     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl=" " rightControl=" " >
        {images}
      </Carousel>
    </div> 

  );
}
