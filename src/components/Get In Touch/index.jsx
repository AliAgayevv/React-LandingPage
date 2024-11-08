import GetInTouchForm from "../GetInTouchForm";
import GetInTouchContact from "../GetInTouchContact";
import datas from "../../datas/contactinfo.json"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa"
import { TfiYoutube } from "react-icons/tfi";



function GetInTouch() {
    return (
        <div className=" h-[550px] bg-gradient-to-r from-blue-500 to-indigo-500  w-screen">
            <div className="flex justify-between h-screen m-auto w-[75%] text-white">

                <div className="w-[70%] h-screen">
                    <h1 className="py-10 text-2xl text-left">
                        Get in Touch
                    </h1>

                    <p className="text-[9px] mb-10">
                        Please fill out the form below to send us an email and we will get back to you as soon as possible.
                    </p>

                    <GetInTouchForm />
                </div>

                <div className="h-screen w-[30%]">
                    {datas.map(data => <GetInTouchContact key={data.id} address={data.address} phone={data.phone} email={data.email} />)}
                </div>




            </div>

            <div className="w-[100%] gap-10 flex justify-center items-center -mt-20">
                <div className="w-10 h-10 rounded-[50%] flex items-center border-white border-solid border-2 justify-center">
                    <FaFacebookF color="white" size={"16px"} />
                </div>

                <div className="w-10 h-10 rounded-[50%] flex items-center border-white border-solid border-2 justify-center">
                    <FaTwitter color="white" size={"16px"} />
                </div>

                <div className="w-10 h-10 rounded-[50%] flex items-center border-white border-solid border-2 justify-center">
                    <TfiYoutube color="white" size={"16px"} />
                </div>


            </div>
        </div>
    )
}

export default GetInTouch;