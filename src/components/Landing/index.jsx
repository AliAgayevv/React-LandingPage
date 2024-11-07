// const bgImg = {
//     backgroundImage : "./../assets/imgs/intro-bg.jpg"
// }

function Landing() {
    return (
        <div className="h-[507px] bg-fixed flex justify-center items-center">
            <img src="./src/assets/imgs/intro-bg.jpg" className=" absolute -z-10" />
            <div className="absolute bg-gray-900 opacity-20 h-[850px] w-screen -z-[9]">

            </div>

            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-center text-6xl text-white break-words w-[500px]">
                    WE ARE A LANDING PAGE
                </h1>

                <p className="text-xs w-[600px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                </p>

                <button type="button" class="w-36 h-12
                 text-white bg-blue-700 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 
                focus:outline-none focus:ring-4 focus:ring-blue-300
                hover:bg-blue-800
                ">
                    Learn More
                    </button>

            </div>

        </div>
    )
}

export default Landing;