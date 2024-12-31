import ContainerIcons from "../Misc/ContainerIcons";
import Link from "next/link";


const InfoCardItem = (props) => {
    return(
        <div className="bg-dark-blue w-full h-16 flex items-center py-3 px-1 rounded-md border-2 text-off-white gap-10">
            <div className="h-12 w-20 flex p-3 justify-center items-center border-r-2 border-off-white">
                <Link href={props.link} target="_blank">
                    <ContainerIcons icon={props.icon}/>
                </Link>
            </div>
            <h3 className="font-normal font-geistSans">
                <Link href={props.link} target="_blank">
                    {props.text}
                </Link>
            </h3>
        </div>
    );
};

export default InfoCardItem;