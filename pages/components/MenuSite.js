import React, { useState } from 'react';
import Link from 'next/link';

import Navbar from './Navbar';
import { MenuMobile, StyledBurger } from './Menu';
import {GradientButton} from './Buttons';

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

const MenuSite = ({ open }) => {

    return (
        <Navbar open={open}>
            <div>
                <div className='logo-container'>
                    <img className='img_logo' src='img/logo.png' />
                </div>
            </div>
            <ul>
                {/* <Link href='/'><li><a>Sobre</a></li></Link> */}
                <Link href='/login'><li><GradientButton>Login</GradientButton></li></Link>
            </ul>
        </Navbar>
    )

} 

export default MenuSite;