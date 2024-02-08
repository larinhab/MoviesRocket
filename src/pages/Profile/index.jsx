import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack'

export function Profile() {
    return(
        <Container>
            <header>
                <ButtonBack></ButtonBack>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/larinhab.png" alt="Foto do Usuário" />
                    
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>
                    <input 
                    id="text" 
                    type="file" />

                    </label>
                </Avatar>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}>
                </Input>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}>
                </Input>

                <Input
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}>
                </Input>

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}>
                </Input>

                <Button title="Salvar"></Button>
            </Form>
        </Container>
    )
}