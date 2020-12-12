import { Fragment } from 'react';
import {GlobalStyle,Container} from './styles'
import {Navigation} from '../Navigation'
import Head from 'next/head'

export const Layout=({children})=>{
    return (
        <Fragment>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>     
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <title>Makessup</title>
            </Head>
            <GlobalStyle/>
            <Navigation/>
            <Container>
                {children}
            </Container>
       </Fragment>
    );
}