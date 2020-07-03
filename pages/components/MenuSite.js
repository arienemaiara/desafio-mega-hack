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
                
            </div>
            <ul>
                <Link href='/dd'><li><a>Sobre</a></li></Link>
                <Link href='/'><li><a>Contato</a></li></Link>
                <Link href='/'><li><GradientButton>Login</GradientButton></li></Link>
            </ul>
        </Navbar>
    )

} 

export default MenuSite;

// const Navbar = () => {
//     const [open, setOpen] = React.useState(false);

//     return (
//         <>
//             <MenuMobile><Burger open={open} setOpen={setOpen} /></MenuMobile>
//             <MenuSite open={open} setOpen={setOpen} />
//         </>
//     )
// };

// export default Navbar;