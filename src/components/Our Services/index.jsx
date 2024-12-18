import OurServiceCard from "../OurServiceCard";




function OurServices() {
    return (
        <div className="flex flex-row h-[600px] w-screen p-5 bg-gradient-to-r from-blue-500 to-indigo-500" id="services">
            <div className="w-[70%] m-auto  ">
                <h1 className="text-center text-2xl text-white mb-4 font-extrabold">
                    OUR SERVICES
                </h1>
                <p className="text-center text-[12px] font-extralight text-white mb-[60px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
                </p>

                <div className="flex gap-x-20 mt-5 mb-5"  >
                    <OurServiceCard logo={"wordpress"}/>
                    <OurServiceCard logo={"shoppingcard"} />
                    <OurServiceCard logo={"cloud"} />
                </div>
                <div className="flex gap-x-20 mt-8 mb-5">

                    <OurServiceCard logo={"translate"} />
                    <OurServiceCard logo={"airplane"} />
                    <OurServiceCard logo={"chartpie"} />

                </div>
            </div>

        </div>
    )
}

export default OurServices;