'use client'

import { RWebShare } from "react-web-share";

const shareData = {
    title: "Test Title",
    text: "Test text",
    url: "https://dalution.gr",
}

const ShareButton = () => {
    return(

        <RWebShare data={shareData} >
            <button className="py-1 px-2 bg-dark-blue text-off-white" allow="web-share">
                Share
            </button>
        </RWebShare>
        
    );
};


export default ShareButton;