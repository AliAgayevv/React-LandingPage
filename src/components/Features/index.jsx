import { LuMessagesSquare } from "react-icons/lu";
import { IoMegaphoneSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";




function Features() {
    return (
        <div className="mt-42 bg-customNoiseWhite w-screen h-[300px] m-auto">
            <div className="w-[60%] m-auto" >
            <h2 className="text-center font-bold mb-5 p-4">
                FEATURES
            </h2>

            <div className="flex gap-5">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                        <LuMessagesSquare size={"24px"} />
                    </div>
                    <i className="fa-solid fa-comments"></i>
                    <h2>Lorem ipsum</h2>
                    <p className="text-center text-xs">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                        <IoMegaphoneSharp
                        size={"24px"} />
                    </div>
                    <i className="fa-solid fa-comments"></i>
                    <h2>Lorem ipsum</h2>
                    <p className="text-center text-xs">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                        <BsPeopleFill size={"24px"} />
                    </div>
                    <i className="fa-solid fa-comments"></i>
                    <h2>Lorem ipsum</h2>
                    <p className="text-center text-xs">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                        <FaWandMagicSparkles size={"24px"} />
                    </div>
                    <i className="fa-solid fa-comments"></i>
                    <h2>Lorem ipsum</h2>
                    <p className="text-center text-xs">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                

            </div>
            </div>
        </div>
    )
}

export default Features;