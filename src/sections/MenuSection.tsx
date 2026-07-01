import "../App.css";
import Rawon from "../assets/Rawon.png";
import Soto from "../assets/Soto.png";
import { MenuCard } from "../components/MenuCard";

export const Menu = () => {
  const menuItems = [
    {
      promo: "Free Delivery & Terima Bersih",
      gambar: Soto,
      altText: "Kuah Soto",
      namaMenu: "Paket Kuah Soto",
      deskripsi: "Kuah + Empal + Perkedel + Isian",
      harga: "Rp.650.000/50 Porsi",
    },
    {
      promo: "Free Delivery & Terima Bersih",
      gambar: Rawon,
      altText: "Kuah Rawon",
      namaMenu: "Paket Kuah Rawon",
      deskripsi: "Kuah + Empal + Perkedel + Isian",
      harga: "Rp.650.000/50 Porsi",
    },
    {
      promo: "Free Delivery & Terima Bersih",
      gambar: Soto,
      altText: "Nasi Soto",
      namaMenu: "Paket Nasi Soto",
      deskripsi: "Nasi + Empal + Perkedel + Isian",
      harga: "Rp.900.000/50 Porsi",
    },
    {
      promo: "Free Delivery & Terima Bersih",
      gambar: Rawon,
      altText: "Nasi Rawon",
      namaMenu: "Paket Nasi Rawon",
      deskripsi: "Nasi + Empal + Perkedel + Isian",
      harga: "Rp.900.000/50 Porsi",
    },
  ];
  return (
    <>
      <div className="font-bold py-5 text-[30px]">
        <h1>Menu</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] max-w-[1170px]">
          {/* mobile: scroll horizontal */}
          <div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {menuItems.map((item, idx) => (
              <div key={idx} className="snap-start shrink-0 w-[70%]">
                <MenuCard {...item} />
              </div>
            ))}
          </div>

          {/* desktop: grid 4 kolom */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex justify-center">
                <MenuCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
