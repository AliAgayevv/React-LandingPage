import FeaturesCard from "../Features Card";


function Features() {
    return (
        <div className="mt-42 bg-customNoiseWhite w-screen h-[300px] mx-auto">
            <div className="w-[60%] m-auto" >
                <h2 className="text-center font-bold mb-5 p-4">
                    FEATURES
                </h2>

                <div className="flex gap-5">
                    <FeaturesCard logo={"message"} />
                    <FeaturesCard logo={"megaphone"} />
                    <FeaturesCard logo={"people"} />
                    <FeaturesCard logo={"magicwand"} />
                </div>
            </div>
        </div>
    )
}

export default Features;