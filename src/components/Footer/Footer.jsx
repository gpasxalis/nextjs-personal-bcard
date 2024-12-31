import Link from "next/link";

const Footer = () => {
    return(
        <div className="bg-yellow w-full rounded-md h-min p-2 mt-2 text-dark-blue">
            <Link href="https://peachlabs.io" target="_blank" className="flex justify-center items-center font-medium">
                Powered by Dalution
            </Link>
        </div>
    );
};


export default Footer;