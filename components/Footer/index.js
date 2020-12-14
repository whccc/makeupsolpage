import { Container,SvgInstagram } from './styles'
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'

export const Footer = () => {
    return (
        <Container>
            <h1>MakeupSol</h1>
            <p>
                makeupsol@gmail.com
            </p>
            <div>
                <SvgInstagram>
                    <a target="_blank" href="https://www.instagram.com/_makeupsol_itagui/?igshid=plb495bxnsgd"><GrInstagram /></a>
                </SvgInstagram>
                <span>
                    <ImWhatsapp />
                </span>
            </div>
        </Container>
    );
}