import "../App.css";
import type { Menu } from "../types/Menu";
import { useEffect, useRef } from "react";

export const MenuCard = ({
  promo,
  gambar,
  altText,
  namaMenu,
  deskripsi,
  harga,
}: Menu) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeDown");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        id="CardMenu"
        className="opacity-0 w-full h-auto md:h-74 rounded-xl bg-white border-4 border-[#FFD900] p-3 sm:p-4 md:p-5 shadow-md md:shadow-lg shadow-black/10 hover:zoom-101"
      >
        <div className="h-5 flex justify-end">
          <div className="w-35 h-5 bg-[#FF3700] rounded-md text-[8px] sm:text-[9px] flex items-center justify-center font-bold text-white">
            <p>{promo}</p>
          </div>
        </div>

        <img
          src={gambar}
          alt={altText}
          className="w-30 h-30 object-cover mx-auto mt-4 mb-4 transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
        />
        <div className="w-full h-15 text-left mb-4">
          <p className="font-bold">{namaMenu}</p>
          <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed">
            {deskripsi}
          </p>
        </div>

        <div
          className="w-full h-9 sm:h-10 rounded-md flex items-center justify-center bg-[#FFD900]"
        >
          <p className="text-sm ">{harga}</p>
        </div>
      </div>
    </>
  );
};
