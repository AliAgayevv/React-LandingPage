import { LuMessagesSquare } from "react-icons/lu";
import { IoMegaphoneSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


function FeaturesCard({ logo }) {
    const {t} = useTranslation()

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-[50%] bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    {(logo === "message" && <LuMessagesSquare size={"24px"} color="white"/>) ||
                    (logo === "megaphone" && <IoMegaphoneSharp size={"24px"} color="white"/>) ||
                    (logo === "people" && <BsPeopleFill size={"24px"} color="white"/>) ||
                    (logo === "magicwand" && <FaWandMagicSparkles size={"24px"} color="white"/>) ||
                    (logo === "airplane" && <GiCommercialAirplane size={"24px"} color="white"/>) ||
                    (logo === "chartpie" && <FaChartPie size={"24px"} color="white"/>)

                }
            </div>  
                
            <h2 className="mt-3 text-[15px]">Lorem ipsum</h2>
            <p className="text-center text-[10px]">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>

                
        </div>
    )
}

export default FeaturesCard;