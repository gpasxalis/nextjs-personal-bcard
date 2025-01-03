"use client";

import { IoIosClose } from "react-icons/io";


const Modal = ({children, ...props}) => {

    if (!props.isOpen) return null;

    return(
        <div className="flex flex-col w-dvw h-dvh gap-5 bg-black/95 position: fixed z-50 px-4 py-2" onClick={props.onClose}>
            <div className="flex w-full justify-end text-4xl text-red-400" >
                <IoIosClose className="cursor-pointer" onClick={props.onClose} />
            </div>
            {children}
        </div>
    );
};


export default Modal;