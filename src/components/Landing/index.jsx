// const bgImg = {
//     backgroundImage : "./../assets/imgs/intro-bg.jpg"
// }

function Landing() {
    return (
        <div className="h-[507px] bg-fixed flex justify-center items-center" id="home">
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

                <button
                    type="button"
                    class="w-28 h-8 flex justify-center items-center uppercase
           text-white bg-gradient-to-br from-blue-500 to-indigo-500 
           hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-400
           font-medium rounded-3xl text-[10px] p-3.5  me-2 mb-2 
           focus:outline-none focus:ring-4 focus:ring-blue-300 
           transition-all duration-1000 ease-in-out
    ">
                    Learn More
                </button>

            </div>

        </div>
    )
}

export default Landing;