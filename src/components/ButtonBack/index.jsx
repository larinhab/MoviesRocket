import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

export function ButtonBack() {
    return (
        <Container to="/">
            <FiArrowLeft></FiArrowLeft>
            <p>Voltar</p>
        </Container>
    )
}