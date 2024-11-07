function Navbar()
{
    return(
        <nav className="flex justify-evenly p-2 h-12 bg-white text-black">
            <h1>
               React Landing Page 
            </h1>

            <ul className="flex gap-4">
                <li>
                    Features
                </li>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
                <li>
                    Gallery
                </li>
                <li>
                    Testimonials
                </li>
                <li>
                    Team
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    )
    
}

export default Navbar;