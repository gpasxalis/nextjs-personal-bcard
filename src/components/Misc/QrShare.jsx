"use client";

import { IoIosClose } from "react-icons/io";
import QRCode from "react-qr-code";
import { usePathname } from "next/navigation";


const QrShare = (props) => {
    const url = usePathname();

    if (!props.isOpen) return null;

    return(
        <div className="flex flex-col w-dvw h-dvh gap-5 bg-black/95 position: fixed z-50 px-4 py-2" onClick={props.onClose}>
            <div className="flex w-full justify-end text-4xl text-red-400" >
                <IoIosClose className="cursor-pointer" onClick={props.onClose} />
            </div>
            <div className="flex h-max justify-center" >
                <QRCode value= {url} />
            </div>
            <h2 className="text-lg text-white text-center">Scan the QR Code</h2>
            <p className="text-base text-off-white text-center">to view my Business Card on another device</p>
        </div>
    );
};


export default QrShare;