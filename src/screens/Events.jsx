import { data } from "../data/data.js";
import { CardEvent } from "../components/CardEvent";

import imgEvent1 from "../assets/images/evento1.jpg";
import imgEvent2 from "../assets/event-card-6.jpg";
import imgEvent3 from "../assets/event-card-5.jpg";
import imgEvent4 from "../assets/event-card-4.jpg";

export function Events() {

  const dataEvent = data.events;

  return (
    

      <div className="p-8 flex justify-center flex-wrap gap-10 ">

      {
        dataEvent.map((e)=>{
          return(
            <CardEvent
              title={e.title}
              imageUrl={e.img}
              date={e.date}
              id={e.id}
            ></CardEvent>

          )
        })
      }

        
      </div>

  );
}
