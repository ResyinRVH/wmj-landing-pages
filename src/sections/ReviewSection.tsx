import "../App.css";
import { ReviewCard } from "../components/ReviewCard";

export const Review = () => {
  return (
    <>
      <div className="font-bold py-10 text-[30px]">
        <h1>Ulasan</h1>
      </div>

      <div className="flex justify-center pb-10 ">
        <div className="w-[90%] max-w-[1170px] h-60 flex md:grid md:grid-cols-2 gap-y-4 gap-x-4 overflow-x-auto md:overflow-x-visible md:overflow-y-auto hide-scrollbar md:pb-10">
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
