import { useParams } from "react-router-dom";
import { data } from "../data/data.js";
import img from "../assets/images/evento1.jpg";
import { BoldText } from "../components/BoldText.jsx";


export const Event = () => {

    const id = useParams().id;
    const dataEvents = data.events;

    const dataEventId = Object.values(dataEvents).find(
        (data) => data.id == id
    )

    const dataDescriptionEvent = dataEventId.description;

    return (
        <>
            <section>
                <h1 className=" text-center text-3xl">🎤✨ UCO FREESTYLE PRESENTA "{dataEventId.title.toUpperCase}" ✨🎤</h1>

            </section>
            <section className=" grid grid-cols-1 md:grid-cols-2  gap-10">

                <div className="">
                    <img src={img} alt="" className=" w-96 rounded-2xl m-20  bg-red-800" />
                </div>
                <div className=" ">
                    {

                        dataDescriptionEvent.map((data, index) => {
                            return (
                                <div className=" my-10 text-3xl">
                                    <BoldText text={data}>
                                        {console.log(data)}
                                    </BoldText>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    )
}

