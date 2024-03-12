import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Input } from '../../components/Input'
import { Container, NewMovie } from './styles'
import { api } from '../../service/api'
import { useEffect } from 'react'
import { useState } from 'react'

export function Home(){
    const [ notes, setNotes ] = useState([]) 
    const [ search, setSearch ] = useState("")

    function handleDetails(id) {
        navigate(`/preview/${id}`);
      }
 
    useEffect(() => {
        async function searchNotes(){
            const response = await api.get(`/notes?movie_title=${search}`)
            setNotes(notes)
            console.log(response.data)
        }

        console.log(notes)
        console.log(search)
        searchNotes()

    }, [ search ])


    return(
        <Container>
            
            <Header>
                <Input 
                placeholder="Pesquisar pelo título" 
                icon={ FiSearch }
                onChange= { (e) => setSearch(e.target.value) }
                > 
                </Input>
            </Header>

            <main>
            <header>
                <h1>Meus Filmes</h1>

            <NewMovie to="/newmovie">
                   <FiPlus></FiPlus>
                   Adicionar Filme
            </NewMovie>
            </header>

            {   
                notes.map((note) => {  
                    <Movie
                        data={note}
                        key={String(note.id)}
                        description={note.description}
                        onClick={()=> handleDetails(note.id)}>
                    </Movie>
                })
            }

            </main>
        </Container>
    )
}
