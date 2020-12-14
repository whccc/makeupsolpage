import React, { Fragment, useEffect, useState } from 'react'
import { MdDehaze, MdAddShoppingCart } from 'react-icons/md'
import { NavigationMobil } from '../MenuMobile'
import { NavigationDesktop } from '../MenuDesktop'
import { Nav, SvgMobil, SvgCart } from './styles'
import Resize from '../../hooks/resize'


export const Navigation = () => {
    const [ShowNav, SetShowNav] = useState(false);
    const ShowResolution=Resize();
    
    return (
        <Fragment>
            <Nav>
                <ul>
                    <li>
                        <img src="/logo.png" />
                    </li>
                    { ShowResolution ? 
                        <NavigationMobil
                            ShowNav={ShowNav}
                        /> : 
                        <NavigationDesktop />
                    }
                    <SvgCart>
                        <MdAddShoppingCart />
                        <span>0</span>
                    </SvgCart>
                    <SvgMobil onClick={() => { SetShowNav(!ShowNav) }}>
                        <MdDehaze />
                    </SvgMobil>
                </ul>
            </Nav>
        </Fragment>
    );
}