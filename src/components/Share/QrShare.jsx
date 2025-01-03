"use client";


import QRCode from "react-qr-code";
import { usePathname } from "next/navigation";
import Modal from "../Misc/Modal";


const QrShare = (props) => {
    const url = usePathname();

    return(
        <Modal onClose={props.onClose} isOpen={props.isOpen} >
            <div className="flex h-max w-full justify-center" >
                <div className="bg-white p-3 rounded-md">
                    <QRCode value= {url} />
                </div>
            </div>
            <div className="flex flex-col gap-1" >
                <h2 className="text-lg font-semibold text-white text-center">Scan the QR Code</h2>
                <p className="text-base text-off-white text-center">to view my Business Card on another device</p>
            </div>
            
        </Modal>
    );
};


export default QrShare;