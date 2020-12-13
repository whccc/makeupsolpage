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
     alert(window.innerWidth)
        const Resize = (e) => {
            window.innerWidth <= 1024 ? SetShowResolution(true):SetShowResolution(false); 
        }
        window.addEventListener("resize", Resize)
        return () => { window.removeEventListener("resize", Resize) }
    }, [])
    return (
        <Fragment>
            <Nav>
                <ul>
                    <li>
                        <img src="//cdn.shopify.com/s/files/1/0423/9153/5767/files/logo_300x300.png?v=1593731766" />
                    </li>
                    { ShowResolution ? 
                        <NavigationMobil
                            ShowNav={ShowNav}
                        /> : 
                        <NavigationDesktop />
                    }
                    <SvgCart>
                        <MdAddShoppingCart />
                    </SvgCart>
                    <SvgMobil onClick={() => { SetShowNav(!ShowNav) }}>
                        <MdDehaze />
                    </SvgMobil>
                </ul>
            </Nav>
        </Fragment>
    );
}