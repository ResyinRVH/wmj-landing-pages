import "../App.css";
import { Map } from "../components/Location";

export const About = () => {
  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="w-[90%] max-w-[1170px] h-120 flex gap-x-6 flex justify-between">
          {/* kiri */}
          <div className="w-1/2 flex flex-col">
            <div className="font-bold text-[30px] flex justify-left py-10">
              <h1>Tentang Kami</h1>
            </div>

            <div className="flex justify-left  text-justify">
              <p>
                Selamat datang di Warung Masakan Jawa, Kami hadir untuk
                menghadirkan hidangan Rawon dan Soto Daging yang telah menjadi
                favorit pelanggan kami. Kami menerima pesanan untuk berbagai
                acara seperti tahlilan, syukuran, arisan, rapat, pengajian,
                ulang tahun, dan berbagai acara keluarga lainnya. Dengan porsi
                yang dapat disesuaikan, kami berkomitmen membantu setiap acara
                menjadi lebih berkesan.
              </p>
            </div>

            <div className="font-bold text-[30px] flex justify-left py-10">
              <h1>Kontak</h1>
            </div>

            <div className="flex justify-left  text-justify">
              <p>Alamat : Pasar Peterongan, Jombang, Jawa Timur, Indonesia <br></br> Whatsapp : 0815-1513-5870
              </p>
            </div>

          </div>

          {/* kanan */}
          <div className="w-1/2 flex flex-col flex items-center justify-center">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};
