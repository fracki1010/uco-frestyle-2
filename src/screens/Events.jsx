
import imgEvent1 from '../assets/event-card-6.jpg'
import imgEvent2 from '../assets/event-card-5.jpg'
import imgEvent3 from '../assets/event-card-4.jpg'
import { CardEvent } from "../components/CardEvent"


export function Events() {
  return (
    <div className="p-8 flex justify-center flex-wrap gap-10 ">
        <CardEvent title={'Evento 1'} imageUrl={imgEvent1} date={'13-06-2024'} ></CardEvent>
        <CardEvent title={'Evento 2'} imageUrl={imgEvent2} date={'10-08-2024'} ></CardEvent>
        <CardEvent title={'Evento 3'} imageUrl={imgEvent3} date={'20-12-2024'} ></CardEvent>
    </div>
  )
}
