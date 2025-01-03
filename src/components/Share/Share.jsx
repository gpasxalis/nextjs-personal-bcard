"use client";


import { useState } from "react";
import ShareButton from "./ShareButton";
import { BsQrCode } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";
import QrShare from "./QrShare";
import Link from "next/link";


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
                <Link className="py-3 px-4 text-off-white text-lg" href="/vcard.vcf" target="_blank" rel="noreferrer" download>
                    <RiContactsBook3Line fontSize={19} />
                </Link>
                <button className="py-3 px-4 text-off-white text-lg" onClick={handleOpen}>
                    <BsQrCode fontSize={16} />
                </button>
                <ShareButton />
            </div>
        </>
    );
};


export default Share;