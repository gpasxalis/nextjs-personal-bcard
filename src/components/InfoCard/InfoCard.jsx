import InfoCardItem from "./InfoCardItem";
import InfoCardIntro from "./InfoCardIntro";

const InfoCard = () => {
    return(
        <div className="flex flex-col w-full rounded-md h-max px-3 pt-16 pb-10 flex justify-between gap-5 bg-off-white -mt-14">
            
            <InfoCardIntro name="Paschalis Grammenos" subtitle="Web Developer" />

            <h3 className="font-firaSans font-bold text-dark-blue text-lg uppercase mt-6">Information</h3>

            <InfoCardItem text="+30 697 810 1030" link="tel:+306978101030" icon="phone" />

            <InfoCardItem text="https://dalution.gr" link="https://dalution.gr" icon="globe" />

            <InfoCardItem text="g_pasxalis" link="https://www.instagram.com/g_pasxalis" icon="instagram" />

            <InfoCardItem text="@ThePeachLabs" link="https://x.com/ThePeachLabs" icon="twitter" />
        </div>
    );
};

export default InfoCard;