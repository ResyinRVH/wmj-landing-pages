import "../App.css";
import { Map } from "../components/Location";

export const About = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1170px] md:grid md:grid-cols-2 ">
          <div className="w-full">
            <div className="font-bold text-3xl flex justify-left pb-10">
              <h1>Tentang Kami</h1>
            </div>
              <div className="flex text-sm text-justify">
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

              <div className="font-bold text-left text-3xl py-10">
                <h1>Kontak</h1>
              </div>

              <div className="flex text-sm text-justify">
                <p>
                  Alamat : Pasar Peterongan, Jombang, Jawa Timur, Indonesia{" "}
                  <br></br> Whatsapp : 0815-1513-5870
                </p>
              </div>
          </div>

          <div className="w-full flex justify-center items-center mt-10">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};
