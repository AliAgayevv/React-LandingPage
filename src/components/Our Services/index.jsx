import { FaWordpressSimple, FaShoppingCart, FaCloudDownloadAlt } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa6";





function OurServices() {
    return (
        <div className="flex flex-row h-[600px] w-screen p-5 bg-blue-600">
            <div className="w-[70%] m-auto ">
                <h1 className="text-center text-2xl text-white mb-4">
                    OUR SERVICES
                </h1>
                <p className="text-center text-sm text-white mb-[60px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.s
                </p>

                <div className="flex gap-x-20 mt-5 mb-5"  >
                    <div className="flex flex-col text-center items-center gap-3">
                        <div className="w-20 h-20 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                            <FaWordpressSimple size={"24px"} />
                        </div>
                        <h2 className="text-base font-thin text-white">
                            Lorem, ipsum dolor.
                        </h2>
                        <p className="text-xs font-extralight text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
                        </p>
                    </div>

                    <div className="flex flex-col text-center items-center gap-3">
                        <div className="w-20 h-20 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                            <FaShoppingCart size={"24px"} />
                        </div>
                        <h2 className="text-base font-thin text-white">
                            Lorem, ipsum dolor.
                        </h2>
                        <p className="text-xs font-extralight text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
                        </p>
                    </div>
                    <div className="flex flex-col text-center items-center gap-3">
                        <div className="w-20 h-20 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                            <FaCloudDownloadAlt size={"24px"} />
                        </div>
                        <h2 className="text-base font-thin text-white">
                            Lorem, ipsum dolor.
                        </h2>
                        <p className="text-xs font-extralight text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
                        </p>
                    </div>

                </div>
                <div className="flex gap-x-20 mt-8 mb-5">

                <div className="flex flex-col text-center items-center gap-3">
                        <div className="w-20 h-20 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                            <MdGTranslate size={"24px"} />
                        </div>
                        <h2 className="text-base font-thin text-white">
                            Lorem, ipsum dolor.
                        </h2>
                        <p className="text-xs font-extralight text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
                        </p>
                    </div>

                    <div className="flex flex-col text-center items-center gap-3">
                        <div className="w-20 h-20 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                            <GiCommercialAirplane size={"24px"} />
                        </div>
                        <h2 className="text-base font-thin text-white">
                            Lorem, ipsum dolor.
                        </h2>
                        <p className="text-xs font-extralight text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
                        </p>
                    </div>
                    <div className="flex flex-col text-center items-center gap-3">
                        <div className="w-20 h-20 rounded-[50%] bg-cyan-300 flex items-center justify-center">
                            <FaChartPie size={"24px"} />
                        </div>
                        <h2 className="text-base font-thin text-white">
                            Lorem, ipsum dolor.
                        </h2>
                        <p className="text-xs font-extralight text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi molestias, iusto rerum perspiciatis eos!
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OurServices;