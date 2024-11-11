import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

function AboutUs() {
    const { t } = useTranslation();
    return (
        <div className="p-10 flex flex-col md:flex-row h-auto md:h-[450px] w-full max-w-[800px] m-auto gap-12" id="about">
            <div className="w-full md:w-[350px] h-[250px]">
                <img src="./src/assets/imgs/about.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-[300px] gap-4 flex flex-col">
                <h1 className="text-2xl">
                    {t("aboutUs")}
                </h1>
                <p className="text-sm md:text-[10px] w-full md:w-[400px]">
                    {t("aboutUsDesc")}
                </p>

                <h1 className="text-lg font-semibold mt-4">
                    {t("whyChooseUs")}
                </h1>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 ml-3 font-thin text-[10px] md:text-[9px]">
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs1-1")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs1-2")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs1-3")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs1-4")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs2-1")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs2-2")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs2-3")}
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCheck className="text-blue-500 mr-1" /> {t("aboutUs2-4")}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;