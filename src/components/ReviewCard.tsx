import "../App.css";
import type { ReviewCardProps } from "../types/Review";

export const ReviewCard = ({ nama, ulasan, rating }: ReviewCardProps) => {
  return (
    <>
      <div className="w-[90%] md:w-full h-50 shrink-0 md:shrink rounded-xl bg-[#FFD900] p-4 shadow-lg shadow-[#444444]/20 ">
        <div className="w-full text-md text-left flex justify-between">
          <h3 className="font-bold">{nama}</h3>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-sm] ${star <= rating ? "text-[#444444]" : "text-white"}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-start mt-4">
          <p className="text-justify text-sm">
            {ulasan}
          </p>
        </div>
      </div>
    </>
  );
};
