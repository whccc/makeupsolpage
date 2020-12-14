import {ContainerProduct,ContainerImg,ContainerDescription,ContainerActions,Button} from './styles'


const Buttons=({
    Text
})=>{

    return (
        <Button>{Text}</Button>
    );

}

export const CardProduct=({
    Img
})=>{
    return(
        <ContainerProduct>
            <ContainerImg>
                <img src={Img}/>
            </ContainerImg>

            <ContainerDescription>
                <h4>SAMY</h4>
                <p>
                    PALETA SOMBRAS SAMY HAVANA LIGHTS
                </p>
                <label>
                    $ 14.7000
                </label>
            </ContainerDescription>
                
            <ContainerActions>
            <Buttons
                    Text="AGREGAR A LA BOLSA"
                />
            </ContainerActions>
        </ContainerProduct>

    );
}