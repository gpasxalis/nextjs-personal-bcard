import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import Link from "next/link";

const ActionButtons = () => {

    return(
        <div className="flex w-full justify-center gap-5">
            <Link className="p-3 bg-yellow text-xl text-dark-blue rounded-full shadow-sm" title="Call Me" href="tel:+306978101030">
                <FiPhoneCall />
            </Link>

            <Link className="p-3 bg-yellow text-xl text-dark-blue rounded-full shadow-sm" title="E-mail Me" href="mailto:paschalis@dalution.gr">
                <BsEnvelope />
            </Link>

            <Link className="p-3 bg-yellow text-xl text-dark-blue rounded-full shadow-sm" title="Add me to your Contacts" href="/vcard.vcf" target="_blank" rel="noreferrer" download>
                <BsPersonVcard />
            </Link>
        </div>
    );
};

export default ActionButtons;