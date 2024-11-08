import { LuMessagesSquare } from "react-icons/lu";
import { IoMegaphoneSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";


function FeaturesCard({ logo }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                    {(logo === "message" && <LuMessagesSquare size={"24px"} />) ||
                    (logo === "megaphone" && <IoMegaphoneSharp size={"24px"} />) ||
                    (logo === "people" && <BsPeopleFill size={"24px"} />) ||
                    (logo === "magicwand" && <FaWandMagicSparkles size={"24px"} />) ||
                    (logo === "airplane" && <GiCommercialAirplane size={"24px"} />) ||
                    (logo === "chartpie" && <FaChartPie size={"24px"} />)

                }
            </div>  
                

            <h2>Lorem ipsum</h2>
            <p className="text-center text-xs">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
        </div>
    )
}

export default FeaturesCard;