import "../App.css";
import Soto from "../assets/Soto.png";

export const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="w-[90%] max-w-[1170px] h-100 rounded-xl bg-radial-[at_75%_50%] from-[#FFEA72] to-[#FFD900] to-70% flex items-center ">
          <div className="w-120 text-left px-10 md:px-20">
            <p className="animate-fadeRight ">
              Menerima Pesanan: Tahlilan, Syukuran, Arisan, Rapat, Acara
              Keluarga, dll.
            </p>
            <div className="w-40 h-10 mt-5 rounded-full bg-[#FF3700] font-bold text-sm text-white flex items-center justify-center cursor-pointer shadow-lg shadow-[#FF3700]/40 hover:bg-[#C82B00] hover:zoom-101">
              <button
               onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="cursor-pointer">Pesan Sekarang</button>
            </div>
          </div>
          <div></div>
          <div className="hidden md:flex justify-end px-20 flex items-center">
            <img src={Soto} alt="Soto" className="w-[350px] object-cover transition-transform duration-700 ease-in-out hover:rotate-[360deg]" />
          </div>
        </div>
      </div>
    </>
  );
};
