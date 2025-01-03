'use client';

import { RWebShare } from "react-web-share";
import { BsShare } from "react-icons/bs";
import { usePathname } from "next/navigation";



const ShareButton = () => {
    const router = usePathname();

    const shareData = {
        title: "Test Title",
        text: "Test text",
        url: router,
    }

    return(

        <RWebShare data={shareData} >
            <button className="py-3 px-4 text-off-white text-base">
                <BsShare />
            </button>
        </RWebShare>
        
    );
};


export default ShareButton;