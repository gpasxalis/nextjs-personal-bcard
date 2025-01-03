'use client';

import { RWebShare } from "react-web-share";
import { BsShare } from "react-icons/bs";
import { usePathname } from "next/navigation";



const ShareButton = () => {
    const router = usePathname();;

    const shareData = {
        title: "Paschalis Grammenos | Digital Business Card",
        text: "Share my business cards with your friends",
        url: router,
    }

    return(

        <RWebShare data={shareData} >
            <button className="py-3 px-4 text-off-white text-lg" >
                <BsShare />
            </button>
        </RWebShare>
        
    );
};


export default ShareButton;