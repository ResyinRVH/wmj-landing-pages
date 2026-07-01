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
  };

  const inputClass =
    "w-full h-[40px] ml-10 mr-10 mb-4 px-10 rounded-xl bg-white text-black outline-none justify-start items-center";

  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="w-[90%] max-w-[1170px] h-95 md:h-67 rounded-xl bg-[#444444]">
          <div className="w-full h-20 text-white text-[30px] py-10 md:py-10 px-6 md:px-10 font-bold flex justify-start">
            <h1>Form Pemesanan</h1>
          </div>

          {/* Desktop : 2 kolom */}
          <div className="hidden md:flex gap-20">
            {/* kolom kiri */}
            <div className="flex flex-col gap-1 w-full md:w-1/2 ">
              <input
                placeholder="Nama Lengkap"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className={inputClass}
              />
              <input
                placeholder="Alamat Acara"
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className={inputClass}
              />
              <input
                placeholder="Tanggal Acara"
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Box Form Kanan */}
            <div className="flex flex-col gap-1 w-1/2 items-center px-10">
              <input
                placeholder="Jumlah Order"
                type="text"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className={inputClass}
              />
              <input
                placeholder="Catatan"
                type="text"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                className={inputClass}
              />

              <button
                onClick={handleWhatsapp}
                className="w-70 h-[40px] px-5 rounded-xl bg-[#FFD900] font-bold shadow-md hover:bg-[#69FF5E] transition-colors hover:zoom-101"
              >
                Pesan Via Whatsapp
              </button>
            </div>
          </div>

          {/* mobile */}
          <div className="flex md:hidden flex-col gap-4 justify-start px-1 text-[12px]">
            <input
              placeholder="Nama Lengkap"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-[330px] h-[40px] px-5 ml-5 rounded-xl bg-white text-black outline-none"
            />
            <input
              placeholder="Alamat Acara"
              type="text"
              value={alamat}
              onChange={(e) => setNama(e.target.value)}
              className="w-[330px] h-[40px] px-5 ml-5 rounded-xl bg-white text-black outline-none"
            />

            <div className="flex  justify-between">
              <input
                placeholder="Tanggal Acara"
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-[150px] h-[40px] px-5 ml-5 rounded-xl bg-white  outline-none"
              />
              <select
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="w-[150px] h-[40px] px-5 mr-6 rounded-xl bg-white outline-none"
              >
                <option value="" disabled>
                  Jumlah Porsi
                </option>
                <option value="50 Porsi">50 Porsi</option>
                <option value="100 Porsi">100 Porsi</option>
                <option value="150 Porsi">150 Porsi</option>
                <option value="200 Porsi">200 Porsi</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            <input
              placeholder="Catatan"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-[330px] h-[40px] px-5 ml-5 rounded-xl bg-white text-black outline-none"
            />

            <button
              onClick={handleWhatsapp}
              className="w-[330px] h-[40px] ml-5 rounded-xl bg-[#FFD900] font-bold shadow-md hover:bg-[#69FF5E] transition-colors"
            >
              Pesan Via Whatsapp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
