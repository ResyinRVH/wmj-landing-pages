import "../App.css";
import Soto1 from "../assets/Soto1.jpeg";
import Soto2 from "../assets/Soto2.jpeg";
import Soto3 from "../assets/Soto3.jpg";
import Rawon1 from "../assets/Rawon1.jpg";
import Rawon2 from "../assets/Rawon2.jpg";


export const GalleryCard = () => {
  return (
    <>
      <div className="w-[280px] h-74 bg-white">
        <img 
        src={Soto1} 
        alt="Soto1" 
        className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="w-[280px] h-74 bg-white">
        <img 
        src={Rawon1} 
        alt="Rawon1" 
        className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="w-[280px] h-74 bg-white">
        <img 
        src={Soto2} 
        alt="Soto2" 
        className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="w-[280px] h-74 bg-white">
        <img 
        src={Rawon2} 
        alt="Soto1" 
        className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="w-[280px] h-74 bg-white">
        <img 
        src={Soto3} 
        alt="Soto1" 
        className="w-full h-full object-cover object-center" 
        />
      </div>
    </>
  );
};
