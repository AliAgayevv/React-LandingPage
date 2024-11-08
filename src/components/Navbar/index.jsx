const navbarElements = ["Features", "About", "Services", "Gallery", "Testimonials", "Team", "Contact"]

function Navbar() {
    return (
        <nav className="flex items-center justify-evenly p-2 h-16 bg-white text-black uppercase gap-10 fixed w-screen z-[200] shadow-md">
            <h1 className="ml-10 font-bold text-base">
                <a href="#home">
                    React Landing Page
                </a>
            </h1>

            <ul className="flex gap-8 text-[10px] m-auto">
                {navbarElements.map((item, index) => (
                    <li key={index} className="relative group">
                        <a href={`#${item.toLowerCase()}`} className="cursor-pointer">
                            {item}
                        </a>
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;