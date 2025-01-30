import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">Sobre Mi</h2>
      <p className="text-white ">
      Soy desarrollador Fullstack Junior con 1 año de experiencia en el desarrollo web y la gestión de bases de datos. Me apasiona construir proyectos funcionales y escalables, y tengo un enfoque detallista en cada tarea, asegurándome de que cada aspecto del desarrollo sea de alta calidad.
      </p>
      <button className="text-white border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center"><a href="#projects">Mis Proyectos</a></button>
    </div>
  );
};

export default AboutMeText;
