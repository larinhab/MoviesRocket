import { FiUser, FiMail, FiLock, FiArrowDownLeft, FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background } from "./style";
import { Button } from '../../components/Button'
import { Input } from "../../components/Input";

import { useState } from 'react'

export function SignUp(){
    const [name, setName] = useState("");  // CRIANDO UM ESTADO PARA CAPTURAR AS INFORMAÇÕES DO USUARIO QUE ESTA CADASTRANDO
    // NAME é o estado, setName a função que atualiza o estado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    function handleSignUp(){
        console.log(name, email, password)
    }

    return(
        <Container>
                <Background></Background>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}> 
                </Input>

                <Input placeholder="Email"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}>
                </Input>

                <Input placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}>
                </Input>

            <Button title="Cadastrar" onClick={handleSignUp()}></Button>
        
            <a href="#">
                <FiArrowLeft></FiArrowLeft>Voltar para o login</a>
            </Form>
            
        </Container>
    )
}