import React from 'react';
import './Header.css';
import {CTA} from './CTA';
import My_Photo from '../../assets/Mayank_Singh_Photo.png';
import { HeaderSocials } from './HeaderSocials';

export const Header = () =>{

    return(<header>
        <div className="container header__container" >
            <h5>Hello I'm</h5>
            <h1>Mayank Singh</h1>
            <h5 className="text-light" >Fullstack Web Developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className='me' >
                <img src={My_Photo} alt="My_Photo" />
            </div>

            <a href='#contact' className={'scroll__down'} >Scroll Down</a>
        </div>
    </header>)
}   