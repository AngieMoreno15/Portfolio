import React from 'react'
import {Link} from 'react-scroll';

const links = [
    {link: "Sobre Mi", section:"about"},
    {link: "Habilidades", section:"skills"},
    {link: "Experiencia", section:"experience"},
    {link: "Proyectos", section:"projects"},
    {link: "Contacto", section:"contact"},
];

const NavbarLinks = () => {
  return (
    <ul className="flex sm:flex-col gap-6 text-center text-white lg:flex-row  font-body lg:relative sm:absolute sm:top-[120%]  left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4" >

        {links.map((link,index) => {
            return(
            <li key={index} className='group'>
                <Link to={link.section}  smooth={true} spy={true} duration={500} offset={-130} className="cursor-pointer text-white hover:text-cyan transition-all duration-500">{link.link}</Link>
                <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>    
            </li>
            )
        })}
    </ul>
  )
}

export default NavbarLinks
