import { NewNote } from '../../components/NewNote'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, NewMovie } from './styles'
import { FiPlus } from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Header></Header>
            
            <main>
            <header>
                <h1>Meus Filmes</h1>

            <NewMovie to="/newmovie">
                   <FiPlus></FiPlus>
                   Adicionar Filme
            </NewMovie>
            </header>

            <NewNote></NewNote>
            <NewNote></NewNote>
            <NewNote></NewNote>
            
            </main>
        </Container>
    )
}
