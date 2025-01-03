import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const ActionButtons = () => {

    return(
        <div className="flex w-full justify-center gap-5">
            <button className="p-3 bg-yellow text-xl text-dark-blue rounded-full shadow-sm" title="Call Me">
                <FiPhoneCall />
            </button>

            <button className="p-3 bg-yellow text-xl text-dark-blue rounded-full shadow-sm" title="E-mail Me">
                <BsEnvelope />
            </button>

            <button className="p-3 bg-yellow text-xl text-dark-blue rounded-full shadow-sm" title="Add me to your Contacts">
                <IoIosContact />
            </button>
        </div>
    );
};

export default ActionButtons;