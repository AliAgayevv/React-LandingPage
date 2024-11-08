function AboutUs() {
    return (
        <div className="p-10 flex-row flex h-[375px] w-[800px] m-auto gap-12" id="about">
            <div className="w-[350px] h-[250px]">
                <img src="./src/assets/imgs/about.jpg" className="w-screen"/>
            </div>

            <div className="w-[300px] gap-4 flex flex-col">
                <h1 className="text-2xl">
                    ABOUT US
                </h1>
                <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <h1>
                    Why Choose Us?
                </h1>

                <div className="flex justify-between ml-3">
                    <div>
                        <ul className="flex gap-1 flex-col">
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                        </ul>
                    </div>
                    <div>
                    <ul className="flex gap-1 flex-col">
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                            <li className="text-xs font-thin">Lorem, ipsum dolor.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs;