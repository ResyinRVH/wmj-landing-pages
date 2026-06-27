import "../App.css";

export const Navbar = () => {
  return (
    <>
      <header className="py-4">
        <div className=" w-[95%] md:w-[80%] lg:w-[1170px] mx-auto rounded-xl grid grid-cols-4 flex">
          {/* logo */}
          <div className="text-[#444444] flex items-center justify-start">
            <h1 className=" font-bold text-[40px]">RVH</h1>
          </div>

          {/* desktop version */}
          <div className="col-span-2">
            <div className="flex items-center justify-center ">
              <nav className="bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center">
                <ul className="flex items-center">
                  <li className=" px-6 py-4 font-bold border-r-1 border-[#444444] hover:text-[#FF3700]">
                    <a href="#hero">Beranda</a>
                  </li>

                  <li className="px-4 py-1 hover:text-[#FF3700] cursor-pointer">
                    <a href="#menu">Menu</a>
                  </li>

                  <li className="px-4 py-1 hover:text-[#FF3700] cursor-pointer">
                    <a href="#gallery">Galeri</a>
                  </li>

                  <li className="px-4 py-1 hover:text-[#FF3700] cursor-pointer">
                    <a href="#tentang">Kontak</a>
                  </li>

                  <li className="px-4 py-1 hover:text-[#FF3700] cursor-pointer">
                    <a href="#tentang">Tentang</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
