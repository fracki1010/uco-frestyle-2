import { CardMember } from "../components/Card"
import imgEvent1 from '../assets/event-card-6.jpg'
import imgEvent2 from '../assets/event-card-5.jpg'
import imgEvent3 from '../assets/event-card-4.jpg'


export function Events() {
  return (
    <div className="p-8">
        <CardMember title={'Evento 1'} imageUrl={imgEvent1} textBody={'hola'} array={['hola','chau']}></CardMember>
        <CardMember title={'Evento 2'} imageUrl={imgEvent2} textBody={'hola'} array={['hola','chau']}></CardMember>
        <CardMember title={'Evento 3'} imageUrl={imgEvent3} textBody={'hola'} array={['hola','chau']}></CardMember>
    </div>
  )
}
