import "../App.css";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#444444] px-4 mt-10">
        <div className="w-[90%] max-w-[1170px] text-white">
    
          <div className="md:w-1/2 md:flex md:flex-col">
            <div className="text-left mt-4">
              <h1 className="font-bold text-xl">Warung Masakan Jawa</h1>
              <ul>
                <li>
                  <a href="#tentang" className="text-sm hover:text-[#FF3700]">Hubungi kami</a>
                </li>
                <li>
                  <a href="#tentang" className="text-sm  hover:text-[#FF3700]">Tentang kami</a>
                </li>
              </ul>
            </div>
          </div>

         
          <div className="py-4 md:w-1/2 md:flex md:flex-col">
            <div className="text-left">
              <h1 className="font-bold text-xl">Jam Buka</h1>
              <p className="text-sm">Setiap Hari Pukul : 18:00 - 00:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-10 bg-[#444444] text-white text-sm flex justify-center items-center">
        <p>© 2026 Warung Masakan Jawa</p>
      </div>
    </>
  );
};
