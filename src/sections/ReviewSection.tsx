import "../App.css";
import { ReviewCard } from "../components/ReviewCard";

export const Review = () => {
  return (
    <>
      <div className="font-bold py-10 text-[30px]">
        <h1>Ulasan</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1170px] h-60 flex gap-y-2 gap-x-4 overflow-x-auto hide-scrollbar">
          
          <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi tanpa perlu cuci piring ketika dikembalikan, sangat recomended untuk tahlilan"
            rating={3}
          />
          <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sangat recomended untuk tahlilan"
            rating={5}
          />

          <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sangat recomended untuk tahlilan"
            rating={3}
          />
          <ReviewCard
            nama="Resyin RVH"
            ulasan="Makanannya enak, lengkap, dan tinggal terima jadi, sangat recomended untuk tahlilan"
            rating={4}
          />
        </div>
      </div>
    </>
  );
};
