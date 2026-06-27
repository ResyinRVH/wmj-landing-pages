import "../App.css";
import Rawon from "../assets/Rawon.png";
import Soto from "../assets/Soto.png";
import { MenuCard } from "../components/MenuCard";

export const Menu = () => {
  return (
    <>
      <div className="font-bold py-10 text-[30px]">
        <h1>Menu</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[80%] lg:w-[1170px] h-74 rounded-xl flex gap-8">
          <MenuCard
            promo="Free Delivery & Terima Bersih"
            gambar={Soto}
            altText="Kuah Soto"
            namaMenu="Paket Kuah Soto"
            deskripsi="Kuah + Empal + Perkedel + Isian"
            harga="Rp.650.000/50 Porsi"
          />
          <MenuCard
            promo="Free Delivery & Terima Bersih"
            gambar={Rawon}
            altText="Kuah Soto"
            namaMenu="Paket Kuah Rawon"
            deskripsi="Kuah + Empal + Perkedel + Isian"
            harga="Rp.650.000/50 Porsi"
          />

          <MenuCard
            promo="Free Delivery & Terima Bersih"
            gambar={Soto}
            altText="Kuah Soto"
            namaMenu="Paket Nasi Soto"
            deskripsi="Nasi + Empal + Perkedel + Isian"
            harga="Rp.900.000/50 Porsi"
          />

          <MenuCard
            promo="Free Delivery & Terima Bersih"
            gambar={Rawon}
            altText="Kuah Soto"
            namaMenu="Paket Nasi Rawon"
            deskripsi="Nasi + Empal + Perkedel + Isian"
            harga="Rp.900.000/50 Porsi"
          />
        </div>
      </div>
    </>
  );
};
