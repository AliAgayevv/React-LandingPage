function Gallery() {
    return (
        <div className="flex flex-col w-[80vw] h-screen m-auto bg-red-600 p-12 gap-4">
            <h1 className="text-center text-2xl text-black">
                GALLERY
            </h1>
            <p className="text-center text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="grid-cols-3 grid">
                <div className="w-[300px] h-[200px]">
                    <img src="./src/assets/imgs/1.1.jpg" className="w-screen" />
                </div>
                <div className="w-[300px] h-[250px]">
                    <img src="./src/assets/imgs/1.2.jpg" className="w-screen" />
                </div>
                <div className="w-[300px] h-[250px]">
                    <img src="./src/assets/imgs/1.3.jpg" className="w-screen" />
                </div>
            </div>
        </div>
    )
}

export default Gallery;