import "../App.css";
import { useState } from "react";

export const Order = () => {
const [nama, setNama] = useState("");
const [alamat, setAlamat] = useState("");
const [tanggal, setTanggal] = useState("");
const [jumlah, setJumlah] = useState("");
const [catatan, setCatatan] = useState("");

const handleWhatsapp = () => {
  if (!nama || !alamat || !tanggal || !jumlah) {
    alert("Mohon lengkapi data terlebih dahulu");
    return;
  }

  const nomorWA = "6281515135870";

  const pesan = `
  Halo Warung Masakan Jawa, saya ingin memesan.

  Nama Lengkap: ${nama}
  Aalamat Acara: ${alamat}
  Tanggal Acara: ${tanggal}
  Jumlah Order: ${jumlah}
  Catatan: ${catatan}
  `;

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");

  setNama("");
  setAlamat("");
  setTanggal("");
  setJumlah("");
  setCatatan("");

}

  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="w-[95%] md:w-[80%] lg:w-[1170px] h-65 rounded-xl bg-[#444444]">
          <div className="w-full h-20 text-white text-[30px] py-10 px-10 font-bold flex justify-start">
            <h1>Form Pemesanan</h1>
          </div>

          <div className="flex gap-5">

            {/* Box form kiri */}
            <div className="flex flex-col gap-1 w-1/2">
              <div className="w-[500px] h-[40px] ml-10 px-10 rounded-xl bg-white text-black flex justify-start items-center">
                <input
                  placeholder="Nama Lengkap"
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="outline-none"
                />
              </div>

              <div className="w-[500px] h-[40px] ml-10 px-10 rounded-xl bg-white text-black flex justify-start items-center mt-5">
                <input
                  placeholder="Alamat Acara"
                  type="text"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  className="outline-none"
                />
              </div>

              <div className="w-[500px] h-[40px] ml-10 px-10 rounded-xl bg-white text-black flex justify-start items-center mt-5 ">
                <input
                  placeholder="Tanggal Acara"
                  type="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  className="outline-none"
                />
              </div>
            </div>

            {/* Box Form Kanan */}
            <div className="flex flex-col gap-6 w-1/2 items-center">
              <div className="w-[500px] h-[40px] rounded-xl bg-white text-black flex pl-10 ">
                <input
                  placeholder="Jumlah Order"
                  type="text"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  className="outline-none"
                />
              </div>

              <div className="w-[500px] h-[40px] pl-10 rounded-xl bg-white text-black flex justify-start items-center">
                <input
                  placeholder="Catatan"
                  type="text"
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  className="outline-none"
                />
              </div>

              <button 
              onClick={handleWhatsapp}
              className="w-70 h-[40px] px-5 rounded-xl bg-[#FFD900] font-bold shadow-md hover:bg-[#69FF5E] transition-colors "
              >
                Pesan Via Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
