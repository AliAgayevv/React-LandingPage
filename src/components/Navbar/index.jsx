import { useTranslation } from 'react-i18next';

const languages = [
    { code: "en", lang: "English" },
    { code: "az", lang: "Azerbaijan" },
    { code: "tr", lang: "Turkish" },
];

// Static identifiers for navbar items
const navbarIds = ["features", "about", "services", "gallery", "testimonials", "team", "contact"];

function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    // Fetch the translated navbar elements as an array
    const navbarElements = t("navbarElements", { returnObjects: true });

    return (
        <nav className="flex items-center justify-evenly p-2 h-16 bg-white text-black uppercase gap-10 fixed w-screen z-[200] shadow-md">
            <h1 className="`w-60 text-nowrap font-bold text-[12px]">
                <a href="#home">
                    React Landing Page
                </a>
            </h1>

            <ul className="flex gap-8 text-[10px] m-auto">
                {navbarElements.map((item, index) => (
                    <li key={index} className="relative group">
                        <a href={`#${navbarIds[index]}`} className="cursor-pointer">
                            {item}
                        </a>
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
            
            <div className="flex gap-2 justify-center items-center">
                {languages.map((lng) => (
                    <button
                        className={`border-black border-2 p-2 flex items-center justify-center duration-500 rounded hover:bg-gradient-to-br from-blue-500 to-indigo-500 hover:text-blue-50 ${lng.code === i18n.language ? "bg-gradient-to-br from-blue-500 to-indigo-500 underline" : ""}`}
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}
                    >
                        {lng.code.toUpperCase()}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;