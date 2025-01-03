import ProjectItem from "./ProjectItem";

import epapanikolaou from "../../../public/images/epapanikolaou-website.jpg"
import karasakalidis from "../../../public/images/karasakalidis-website.jpg"



const Projects = () => {
    return(
        <div className="bg-off-white w-full rounded-md h-max px-3 py-5 mt-5 flex flex-col justify-between gap-6">
            <h2 className="font-firaSans font-bold text-dark-blue text-lg uppercase">Projects</h2>

            <ProjectItem 
                image = {epapanikolaou}

                title="epapanikolaou"
            
                paragraph="Σκοπός του project ήταν η παρουσίαση των υπηρεσιών που προσφέρει καθώς 
                και η δυνατότητα ο χρήστης να μπορεί να κλείσει ραντεβού online"
                
                link="https://epapanikolaou.gr"
            />

            <ProjectItem 
                image = {karasakalidis}

                title="Karasakalidis LTD" 
            
                paragraph="Σκοπός του project ήταν η παρουσίαση των υπηρεσιών που προσφέρει η εταιρεία, 
                η δημιουργία του ηλεκτρονικού της καταλόγου για την παρουσίαση των προϊόντων που εμπορεύεται καθώς 
                και η μετάφραση της ιστοσελίδας της σε επιπλέον 2 γλώσσες."
                
                link="https://karasakalidisltd.com"
            />

        </div>
        
    );
};

export default Projects;