const InfoCardIntro = (props) => {
    return(
        <>
       
            <h1 className="font-extrabold text-dark-blue text-xl text-center">{props.name}</h1>

            <h2 className="font-medium text-dark-gray text-base text-center -mt-4">{props.subtitle}</h2>

            <div className="flex flex-col w-full gap-2 mt-2" >
                
                <p className="font-firaSans font-normal text-dark-gray text-base">💻 Μετατρέποντας ιδέες σε ψηφιακές λύσεις</p>

                <p className="font-firaSans font-normal text-dark-gray text-base">🚀 Building PeachLabs</p>

                <p className="font-firaSans font-normal text-dark-gray text-base">💡 Dalution Websites Project</p>

                <p className="font-firaSans font-normal text-dark-gray text-base">📍 Greece, Alexandroupolis (AXD)</p>

            </div>

            

        </>
    );
};

export default InfoCardIntro;