import { useTranslation } from "react-i18next";

function Landing() {
    const {t} = useTranslation();
    return (
        <div className="h-screen bg-fixed flex justify-center items-center" id="home">
            <img src="./src/assets/imgs/intro-bg.jpg" className="absolute h-full w-full object-cover -z-10" />
            <div className="absolute bg-gray-900 opacity-20 h-full w-full -z-[9]"></div>

            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-center text-6xl text-white break-words w-[500px]">
                    {t("landingPage")}
                </h1>

                <p className="text-xs w-[600px] text-center text-white">
                    {t("landingPageDesc")}
                </p>

                <button
                    type="button"
                    className="w-28 h-8 flex justify-center items-center uppercase
                               text-white bg-gradient-to-br from-blue-500 to-indigo-500 
                               hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-400
                               font-medium rounded-3xl text-[10px] p-3.5 mb-2
                               focus:outline-none focus:ring-4 focus:ring-blue-300 
                               transition-all duration-1000 ease-in-out"
                >
                    {t("landingPageBtn")}
                </button>
            </div>
        </div>
    );
}

export default Landing;