'use client'

const data = {
    title: "Test Title",
    text: "Test text",
    url: "https://dalution.gr"
}

const handleShare = async () => {
    try {
        await navigator.share({data});
        console.log("Data was shared successfully");
    }  catch(e) {
        console.error("Navigator Error:", e.message );
    }
}


const ShareButton = () => {
    return(
        <button onClick={handleShare} className="py-1 px-2 bg-dark-blue text-off-white" >
            Share
        </button>
    );
};

export default ShareButton;