import { Fragment } from "react";

import Link from 'next/link'

export const Navigation = () => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link href='/Productos'>
                            <a>Productos</a>
                        </Link>
                        <ul>
                            <li>
                                <Link href="/Capilar">
                                    <a>Capilar</a>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="/d">
                                            <a>Casdsec</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/d">
                                            <a>Caaae</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/d">
                                            <a>Ccas</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/Capilar">
                                    <a>Facial</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Capilar">
                                    <a>Corporal</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Fragment>

    );
}