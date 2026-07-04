
import { GalleryCard } from "../components/GalleryCard"

export const Gallery = () => {
   return (
      <>
      <div className="font-bold py-10 text-[30px]">
        <h1>Galeri</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1170px] overflow-hidden ">
          <div className="flex animate-marquee gap-4">
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </div>
      
      </>
   )
}