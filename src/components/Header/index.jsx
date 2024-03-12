import { Container, Profile, Logout, Search } from './styles.js'
import avatarPlaceHolder  from '../../assets/user.svg'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth.jsx';
import { Input } from "../Input/index.jsx";
import { FiSearch } from "react-icons/fi";
import { api } from '../../service/api.js';

export function Header(){
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </Search>

            <Profile to="/profile">
                <img
                src={avatarURL}
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