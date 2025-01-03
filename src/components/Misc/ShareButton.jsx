'use client'

import { RWebShare } from "react-web-share";
import { BsShare } from "react-icons/bs";

const shareData = {
    title: "Test Title",
    text: "Test text",
    url: "https://dalution.gr",
}

const ShareButton = () => {
    return(

        <RWebShare data={shareData} >
            <button className="py-3 px-4 text-off-white">
                <BsShare />
            </button>
        </RWebShare>
        
    );
};


export default ShareButton;