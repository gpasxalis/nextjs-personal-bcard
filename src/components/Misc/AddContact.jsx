import { RiContactsBook3Line } from "react-icons/ri";
import Link from "next/link";


const AddContact = () => {
    
    return(
        <div className="bg-yellow fixed bottom-0 w-full flex justify-center" >
            <Link className="py-3 px-4 text-dark-blue text-base flex justify-center items-center gap-3 font-medium" 
                href="/vcard.vcf" target="_blank" rel="noreferrer" download>
                <RiContactsBook3Line fontSize={19} /> Add To Contacts
            </Link>
        </div>               
    );
};


export default AddContact;