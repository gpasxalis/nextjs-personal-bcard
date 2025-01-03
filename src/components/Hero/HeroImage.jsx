import Image from "next/image";
import Logo from "../../../public/images/logo.png"

const HeroImage = () => {
    return(
        <div className="w-full flex justify-center -mt-14 z-10">
            <Image alt="Logo Image" src={Logo} className="w-1/3 rounded-full border-4 border-off-white shadow-md " />            
        </div>
    );
};


export default HeroImage;