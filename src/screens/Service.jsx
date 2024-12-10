import { BoldText } from '../components/BoldText.jsx';
import {data} from '../data/data.js'

import { useParams} from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const Service = () => {
    const id = useParams().id;
    const dataServices = data.services;


    const dataServicesId = Object.values(dataServices).find((data) => data.id  == id); 
    

  return (
    <section className=' rubik-mono-one-regular'>
        <div className=' flex justify-center'>

        <h1 className=' bg-blue-700 text-3xl font-bold text-center m-20 animate-wiggle max-w-fit p-5'>{dataServicesId.title}</h1>
        </div>
        <div className=' m-7'>
            <p className='flex justify-center text-center'>{dataServicesId.description}</p>
        </div>

        <div className=' m-1 md:m-20 p-3 md:p-10'>


            {
                dataServicesId.benefits.map((e, i) =>  <div className='mb-4 bg-black rounded-2xl p-5' key={i}><BoldText text={e} /></div>
)
            }

        </div>
    
    </section>
  )
}
