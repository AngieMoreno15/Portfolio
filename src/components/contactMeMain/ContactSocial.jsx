import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial Link="https://www.linkedin.com/in/angie-moreno-0b52a420a" Icon={FaLinkedin}/>
        <SingleContactSocial Link="https://github.com/AngieMoreno15" Icon={IoLogoGithub}/>
        <SingleContactSocial Link="https://www.instagram.com/anguelous15/" Icon={FaInstagram}/>
    </div>
  );
};

export default ContactSocial;