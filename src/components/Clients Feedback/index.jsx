import { useEffect, useState } from "react";
import ClientsFeedbackCard from "../Clients Feedback Card";
import datas from "../../datas/clientsfeedback.json"


function ClientsFeedback() {


    return (
        <div className=" bg-customNoiseWhite w-screen">
            <div className="w-[800px] bg-customNoiseWhite flex flex-col mt-10 h-[620px] pt-20 gap-16 m-auto">
                <h1 className="text-center text-2xl font-bold">WHAT OUR CLIENTS SAY</h1>

                <div className="grid grid-cols-3">
                    {
                        datas.map(data => (
                            <ClientsFeedbackCard name={data.name} comment={data.comment} photoPath={data.photoPath} />
                        ))
                    }


                </div>
            </div>

        </div>
    )

}

export default ClientsFeedback;