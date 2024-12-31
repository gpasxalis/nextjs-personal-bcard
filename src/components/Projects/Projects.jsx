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
            
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris scelerisque mi malesuada rhoncus vulputate. 
                        Quisque neque arcu, iaculis id gravida eu, vulputate et augue."
                
                link="https://epapanikolaou.gr"
            />

            <ProjectItem 
                image = {karasakalidis}

                title="Karasakalidis LTD" 
            
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris scelerisque mi malesuada rhoncus vulputate. 
                        Quisque neque arcu, iaculis id gravida eu, vulputate et augue."
                
                link="https://karasakalidisltd.com"
            />

        </div>
        
    );
};

export default Projects;