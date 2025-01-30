import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  { job:"Desarrollador Full-Stack",
    company:"FREELANCE",
    date:"Present",
    responsibilities: [
      "Diseño e implementación de plataforma de e-commerce via Whatsapp.",
      "Integración de funcionalidades clave como gestión de productos.",
      "Desarrollo de interfaz responsiva, con mejor experiencia de usuario.",
    ],
  },

  { job:"Desarrollador Back-End",
    company:"FREELANCE",
    date:"Julio 2024 - Agosto 2024",
    responsibilities: [
      "Desarrollo web interactivo tipo videojuego para el aprendizaje de inglés.",
      "Orientado a niños de 5 a 6 años, implementado en un entorno educativo.", 
      "Objetivo: enseñanza de vocabulario relacionado con animales mediante dinámicas gamificadas.", 
    ],
  },

  { job:"Desarrollador Full-Stack",
    company:"AZ Technology Support",
    date:"Junio 2021 - Julio 2021",
    responsibilities: [
      "Desarrollo de página web para microempresa de tecnología.",
      "Visualización de productos en stock.", 
      "Objetivo: Informacion, gestión y control de inventarios en tiempo real.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience}/>
            {index < 2 ? (
            <motion.div variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}>
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden"/> 
            </motion.div>
            ):("")}
          </>
        )     
      })}
    </div>
  );
};

export default AllExperience;