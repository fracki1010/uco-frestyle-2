import { data } from "../data/data.js";
import { CardEvent } from "../components/CardEvent";


export function Events() {

  const dataEvent = data.events;

  return (


    <div className="p-8 flex justify-center flex-wrap gap-10 ">

      {
        dataEvent.map((e, index) => {
          return (
            <CardEvent
              key={index}
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
