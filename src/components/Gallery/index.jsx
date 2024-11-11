import GalleryElement from "../Gallery Element";

function Gallery() {
    return (
        <div className="flex flex-col w-[80vw] h-[600px] m-auto p-12 gap-4 mt-10 mb-5`` items-center justify-center" id="gallery">
            <h1 className="text-center text-2xl text-black">
                GALLERY
            </h1>
            <p className="text-center text-sm font-thin">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>


            <div className="flex-col flex">
                <div className="flex">

                    <GalleryElement photoPath={"./src/assets/imgs/1.1.jpg"}/>
                    <GalleryElement photoPath={"./src/assets/imgs/1.2.jpg"}/>
                    <GalleryElement photoPath={"./src/assets/imgs/1.3.jpg"}/>

                </div>
                <div className="flex">

                <GalleryElement photoPath={"./src/assets/imgs/2.1.jpg"}/>
                <GalleryElement photoPath={"./src/assets/imgs/2.2.jpg"}/>
                <GalleryElement photoPath={"./src/assets/imgs/2.3.jpg"}/>

                </div>
                <div className="flex">

                <GalleryElement photoPath={"./src/assets/imgs/3.1.jpg"}/>
                <GalleryElement photoPath={"./src/assets/imgs/3.2.jpg"}/>
                <GalleryElement photoPath={"./src/assets/imgs/3.3.jpg"}/>
                   

                </div>
            </div>
        </div>
    )
}

export default Gallery;