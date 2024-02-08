import { FiPlus, FiSearch} from 'react-icons/fi'

import { Container, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function Home(){
    return(
        <Container>
            <Header></Header>
            
                <h1>
                    Meus Filmes
                </h1>

            <NewNote to="/newmovienote">
                <FiPlus></FiPlus>
                Adicionar FIlme
            </NewNote>
            
        </Container>
    )
}
