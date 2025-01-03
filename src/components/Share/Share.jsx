"use client";

import { useState } from "react";
import ShareButton from "../Misc/ShareButton";
import { BsQrCode } from "react-icons/bs";
import QrShare from "../Misc/QrShare";

const Share = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <QrShare isOpen={open} onClose={handleClose} />
            <div className="w-full flex justify-end bg-dark-blue" >
                <button className="py-3 px-4 text-off-white text-lg" onClick={handleOpen}>
                    <BsQrCode />
                </button>
                <ShareButton />
            </div>

        </>
    );
};


export default Share;