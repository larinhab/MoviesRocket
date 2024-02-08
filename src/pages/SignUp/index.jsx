import { Container, Form, Background } from "./style";
import { FiUser, FiMail, FiLock, FiArrowDownLeft, FiArrowLeft} from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from "../../components/Input";


export function SignUp(){
    return(
        <Container>
                <Background></Background>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome"
                type="text"
                icon={FiUser}>
                </Input>

                <Input placeholder="Email"
                type="text"
                icon={FiMail}>
                </Input>

                <Input placeholder="Senha"
                type="password"
                icon={FiLock}>
                </Input>

            <Button title="Cadastrar"></Button>
        
            <a href="#">
                <FiArrowLeft></FiArrowLeft>Voltar para o login</a>
            </Form>
            
        </Container>
    )
}