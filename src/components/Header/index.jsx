import { Container, Profile, Logout, Search } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth.jsx';
import { Input } from "../Input/index.jsx";
import { FiSearch } from "react-icons/fi";

export function Header(){
    const { signOut } = useAuth()

    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </Search>

            <Profile to="/profile">
                <img
                src="https://github.com/larinhab.png"
                alt="Foto do Usuário" />

                <div>
                    <span>Bem Vindo,</span>
                    <strong>Lara Viana</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}