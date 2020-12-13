import React, { Fragment, useEffect, useState } from 'react'
import { MdDehaze, MdAddShoppingCart } from 'react-icons/md'
import { NavigationMobil } from '../MenuMobile'
import { NavigationDesktop } from '../MenuDesktop'
import { Nav, SvgMobil, SvgCart } from './styles'


export const Navigation = () => {
    const [ShowNav, SetShowNav] = useState(false);
    const [ShowResolution, SetShowResolution] = useState(false);

    useEffect(() => {
        window.innerWidth<=1024 ? SetShowResolution(true):SetShowResolution(false); 
        const Resize = (e) => {
            window.innerWidth <= 1024 ? SetShowResolution(true):SetShowResolution(false); 
        }
        window.addEventListener("resize", Resize)
        return () => { window.removeEventListener("resize", Resize) }
    })
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