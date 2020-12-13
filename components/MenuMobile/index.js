import {  useState } from "react";
import {  SubMenu, ContainerMenu, MenuFlotante } from './styles'
import Link from 'next/link'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md'

const SubMenus = () => {
    const [ShowSubMenu, SetShowSubMenu] = useState(false);
    return (
        <li>
            <Link href="/">
                <a>Capilar</a>
            </Link>
            {
                ShowSubMenu ? <MdKeyboardArrowDown onClick={() => { SetShowSubMenu(!ShowSubMenu) }} /> : <MdKeyboardArrowLeft onClick={() => { SetShowSubMenu(!ShowSubMenu) }} />
            }
            <SubMenu ShowSubMenu={ShowSubMenu}>
                <li>
                    <Link href="/">
                        <a>Casdsec</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Caaae</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Ccas</a>
                    </Link>

                </li>
            </SubMenu>
        </li>
    )
}
export const NavigationMobil = ({
    ShowNav
}) => {
    return (
        <MenuFlotante ShowNav={ShowNav}>
            <h3>Productos</h3>
            <ContainerMenu>
                <SubMenus />
                <SubMenus />
                <SubMenus />
            </ContainerMenu>
        </MenuFlotante>
    );
}