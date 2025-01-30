import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">Desde 2024</p>
      <div className="flex justify-center items-center gap-4 ">
        <ExperienceInfo number="1" text="Año"/>
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="4" text="Paginas"/>
      </div>
      <p className="text-center text-white">Experiencia en desarrollo web y gestión de bases de datos, enfocado en crear soluciones escalables, eficientes y de alta calidad.</p>
    </div>
  )
}

export default ExperienceTopLeft