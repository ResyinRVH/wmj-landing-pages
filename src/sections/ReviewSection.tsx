import "../App.css";
import { ReviewCard } from "../components/ReviewCard";

export const Review = () => {
  return (
    <>
      <div className="font-bold py-10 text-[30px]">
        <h1>Ulasan</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1170px] h-60 flex w-screen gap-y-2 gap-x-6 overflow-y-auto hide-scrollbar">
          <div className="w-1/2 flex flex-col gap-3 px-2 py-2">
            <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sanagat recomended untuk tahlilan"
            rating={3}
            />
            <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sanagat recomended untuk tahlilan"
            rating={5}
            />
            
          </div>
          <div className="w-1/2 flex flex-col gap-3 px-2 py-2">
            <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sanagat recomended untuk tahlilan"
            rating={3}
            />
            <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sanagat recomended untuk tahlilan"
            rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};
