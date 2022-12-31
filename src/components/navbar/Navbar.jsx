import React from "react";
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServerLine} from 'react-icons/ri';
import {ImBooks} from 'react-icons/im';

export const Navbar = () => {
  return (
    <nav>
      <a href='#'> <AiOutlineHome/> </a>
      <a href='#about'> <AiOutlineUser/> </a>
      <a href='#qualification'> <BiBook/> </a>
      <a href='#skills'> <ImBooks/> </a>
      <a href='#projects'> <RiServerLine/> </a>
      <a href='#contact'> <BiMessageSquareDetail/> </a>
    </nav>
  );
};
