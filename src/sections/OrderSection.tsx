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

    const pesan = `Halo Warung Masakan Jawa, saya ingin memesan.

Nama Lengkap: ${nama}
Alamat Acara: ${alamat}
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
    "w-full h-10 px-4 rounded-xl border border-black bg-white text-black outline-none justify-start items-center";

  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="w-[90%] max-w-[1170px] border rounded-xl bg-white shadow-lg shadow-black/10">
          <div className="w-full h-20 text-[30px] pt-10 px-6 md:px-10 font-bold flex justify-start">
            <h1>Form Pemesanan</h1>
          </div>

          <div className="p-10 md:pt-5 px-5 text-xs">
            <div className="flex flex-col md:flex-row gap-3 w-full ">
              <div className="md:w-1/2 flex flex-col gap-3">
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

                <div className="">
                  <input
                    placeholder="Tanggal Acara"
                    type="date"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    className={`${inputClass} ${tanggal ? "text-black" : "text-gray-500"}`}
                  />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-3 ">
                <select
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  className={`${inputClass} appearance-none ${
                    jumlah ? "text-black" : "text-gray-500"
                  }`}
                >
                  <option value="">Jumlah Porsi</option>
                  <option value="50">50 Porsi</option>
                  <option value="100">100 Porsi</option>
                  <option value="150">150 Porsi</option>
                  <option value="200">200 Porsi</option>
                  <option value="Custom">Custom</option>
                </select>

                <textarea
                  placeholder="Catatan"
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  className={`${inputClass} py-3 resize-none hide-scrollbar `}
                />
                <div>
                  <button
                    onClick={handleWhatsapp}
                    className="w-70 h-[40px] px-5 rounded-xl bg-[#FFD900] font-bold shadow-md hover:bg-[#FF3700] hover:text-white transition-colors hover:zoom-101"
                  >
                    Pesan Via Whatsapp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
