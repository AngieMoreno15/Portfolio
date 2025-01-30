import React from 'react'
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {
        name:"Portafolio",
        year:"Dec2024",
        align:"right",
        image:"../../../public/images/portfolio.png",
        link:"#home",
    },

    {
        name:"E-Commerce",
        year:"Ago2024",
        align:"left",
        image:"../../../public/images/e-comeerce.png",
        link:"https://angiemoreno15.github.io/e-comeerce/",
    },

    {
        name:"Animal Adventure Quest",
        year:"Jul2024",
        align:"right",
        image:"../../../public/images/GameAnimals.png",
        link:"https://angiemoreno15.github.io/Learn_animals-/index.html",
    },

    {
        name:"AZ Technology Support",
        year:"Ene2024",
        align:"left",
        image:"../../../public/images/AZ.png",
        link:"https://aztecno.com.co/Admin/gallery/principal.php",
    },


]

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>   
            <ProjectsText />
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((project, index)=>{
                return (
                    <SingleProject key={index} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link}/>
                );
            })}
        </div>
    </div>
  );
};

export default ProjectsMain;