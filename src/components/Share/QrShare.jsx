"use client";


import QRCode from "react-qr-code";
import { usePathname } from "next/navigation";
import Modal from "../Misc/Modal";


const QrShare = (props) => {
    const url = usePathname();

    return(
        <Modal onClose={props.onClose} isOpen={props.isOpen} >
            <div className="flex h-max justify-center" >
                <QRCode value= {url} />
            </div>
            <h2 className="text-lg text-white text-center">Scan the QR Code</h2>
            <p className="text-base text-off-white text-center">to view my Business Card on another device</p>
        </Modal>
    );
};


export default QrShare;