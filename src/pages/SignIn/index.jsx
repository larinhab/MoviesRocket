import { Container, Form, Background } from "./styles"
import { Button } from '../../components/Button'
import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Fragment } from "react"

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login:</h2>

                <Input placeholder="Email"
                type="text"
                icon={FiMail}>
                </Input>

                <Input placeholder="Senha"
                type="password"
                icon={FiLock}>
                </Input>

            <Button title="ENTRAR"></Button>
        
                <a href="#">Criar Conta</a>
        
            </Form>
            
            <Background></Background>
        </Container>
    )
}