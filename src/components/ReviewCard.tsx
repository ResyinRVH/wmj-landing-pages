import "../App.css";
import type { ReviewCardProps } from "../types/Review";

export const ReviewCard = ({ nama, ulasan, rating }: ReviewCardProps) => {
  return (
    <>
      <div className="w-full  rounded-xl bg-[#FFD900] p-[10px] shadow-lg shadow-[#444444]/20">
        <div className="w-full h-10 flex items-center justify-between">
          <h3 className="font-bold">{nama}</h3>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-[25px] ${star <= rating ? "text-[#444444]" : "text-white"}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-start">
          <p className="text-left text-sm">
            {ulasan}
          </p>
        </div>
      </div>
    </>
  );
};
