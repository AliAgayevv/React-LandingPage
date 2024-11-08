import { FaWordpressSimple, FaShoppingCart, FaCloudDownloadAlt } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa6";



function OurServiceCard({logo}) {
    return (
        <div className="flex flex-col text-center items-center gap-3">
            <div className="w-20 h-20 rounded-[50%] bg-gradient-to-br from-blue-500 to-indigo-200 flex items-center justify-center">
            {(logo === "wordpress" && <FaWordpressSimple size={"24px"}/>) || 
            (logo === "shoppingcard" && <FaShoppingCart size={"24px"}/>) ||
            (logo === "cloud" && <FaCloudDownloadAlt size={"24px"} />) || 
            (logo === "translate" && <MdGTranslate size={"24px"}/>) ||
            (logo === "airplane" && <GiCommercialAirplane size={"24px"} />) ||
            (logo === "chartpie" && <FaChartPie size={"24px"} />)
            
            }
            </div>
            <h2 className="text-base font-thin text-white">
                Lorem, ipsum dolor.
            </h2>
            <p className="text-xs font-extralight text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
            </p>
        </div>
    )
}

export default OurServiceCard;