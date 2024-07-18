import { CardMember } from "../components/Card"
import imgEvent1 from '../assets/event-card-6.jpg'

export function Events() {
  return (
    <div className="p-8">
        <CardMember title={'Evento 1'} imageUrl={imgEvent1} textBody={'hola'} array={['hola','chau']}></CardMember>
    </div>
  )
}
