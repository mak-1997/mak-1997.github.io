import React from "react";
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServerLine} from 'react-icons/ri';
import {ImBooks} from 'react-icons/im';
import { useState } from "react";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""} > <AiOutlineHome/> </a>
      <a href='#about'onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} > <AiOutlineUser/> </a>
      <a href='#skills' onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""} > <ImBooks/> </a>
      <a href='#projects' onClick={()=> setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""} > <RiServerLine/> </a>
      <a href='#contact' onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} > <BiMessageSquareDetail/> </a>
    </nav>
  );
};
