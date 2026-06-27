
import { GalleryCard } from "../components/GalleryCard"

export const Gallery = () => {
   return (
      <>
      <div className="font-bold py-10 text-[30px]">
        <h1>Galeri</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[80%] lg:w-[1170px] h-74 rounded-xl flex bg-black">
            <GalleryCard/>
        </div>
      </div>
      
      </>
   )
}