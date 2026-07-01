import "../App.css";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-35 bg-[#444444] flex justify-center">
        <div className="w-[90%] max-w-[1170px] h-35 flex text-white">
          {/* kiri */}
          <div className="w-1/2 flex flex-col">
            <div className="text-left py-10">
              <h1 className="font-bold text-[30px]">Warung Masakan Jawa</h1>
              <ul>
                <li>
                  <a href="#tentang" className="hover:text-[#FF3700]">Hubungi kami</a>
                </li>
                <li>
                  <a href="#tentang" className="hover:text-[#FF3700]">Tentang kami</a>
                </li>
              </ul>
            </div>
          </div>

          {/* kanan */}
          <div className="w-1/2 flex flex-col">
            <div className="text-left py-10">
              <h1 className="font-bold text-[30px]">Jam Buka</h1>
              <p className="">Setiap Hari Pukul : 18:00 - 00:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-10 bg-[#444444] text-white flex justify-center items-center">
        <p>© 2026 Warung Masakan Jawa</p>
      </div>
    </>
  );
};
