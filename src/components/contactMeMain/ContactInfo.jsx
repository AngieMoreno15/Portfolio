import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo  text="m.angie_48@hotmail.com" Image={HiOutlineMail}/>
        <SingleInfo  text="+57 3134513108" Image={FiPhone}/>
        <SingleInfo  text="Bogota, Colombia" Image={IoLocationOutline}/>
    </div>
  );
};

export default ContactInfo;