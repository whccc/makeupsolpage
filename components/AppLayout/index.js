import { Fragment } from 'react';
import {GlobalStyle,Container} from './styles'


export const Layout=({children})=>{
    return (
        <Fragment>
            <GlobalStyle/>
            <Container>
                {children}
            </Container>
        </Fragment>
    );
}