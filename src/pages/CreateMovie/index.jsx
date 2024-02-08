import { Header } from "../../components/Header";
import { Container } from "./styles";
import { ButtonBack } from "../../components/ButtonBack";


export function NewMovie() {
    return(
        <Container>
            <Header></Header>
            <ButtonBack></ButtonBack>

            <h1>Novo Filme</h1>   
        </Container>
    )
}