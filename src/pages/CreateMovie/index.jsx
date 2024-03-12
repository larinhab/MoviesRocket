import { ButtonBack } from "../../components/ButtonBack";
import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Stars } from "../../components/Stars";
import { useNavigate } from "react-router-dom";
import { Tags } from "../../components/Tags";
import { api } from "../../service/api";
import { Container} from "./styles";
import { useState } from "react";

export function CreateMovie() {
    const navigate = useNavigate()

    const [ movie_title, setTitle ] = useState("")
    const [ movie_description, setDescription ] = useState("")

    const [ tags, setTags] = useState([])
    const [ newTag, setNewTag] = useState("")

    const [ movie_note, setStars ] = useState([])
    const [ rating, setRating] = useState("")
    
    async function handleNewMovieNote(){
        if(!setTitle){
            return alert("Você deixou o título vazio!")
        }

        if(!setDescription){
            return alert("Você deixou a descrição do filme vazia!")
        }

        if(!setRating, !setStars){
            return alert("Você precisa dar uma nota de 0 à 5")
        }

        if(!newTag){
            return alert("Você deixou um campo de marcador vazio!")
        }

        await api.post("/notes", {
            movie_title,
            movie_description,
            movie_note,
            tags// NÃO ESTA PASSANDO NO BACK END, RESOLVER
        }),

        console.log(movie_note)

        await api.post("/tags", {
            tags,
            tag_name,
            note_id,
            user_id,
        }),

        alert("Nota criada com sucesso", 200)
        navigate("/")
    }

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }
    
    function handleRating(){
        setRating(prevState => [...prevState, setStars])    
        setStars()
    }


    return(
        <Container>
            <Header></Header>

        <main>
            <form>

            <ButtonBack></ButtonBack>
            <h1>Novo Filme</h1>   

            <div className="movie-info">

                <Input 
                type="text" 
                title="movie_title"
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)} />

                <Input 
                type="number" 
                title="movie_note" 
                placeholder="Sua nota (de 0 à 5)"
                minLength="0"
                maxLength="5"

                value= { rating }
                onChange={(e) => setRating(e.target.value)}>
                </Input>

                <Stars
                rating = { setRating }// AQUI NÃO FUNCIONA SÓ COLOCANDO NUMERO
                isbigsize
                onChange = {(e) => setStars(e.taget.value)} 
                onClick={ handleRating }>
                </Stars>
            
            </div>

                <TextArea 
                title="movie_description"
                placeholder="Observações"
                onChange={(e) => setDescription(e.target.value)}>
                </TextArea>

            <Section>
                <h2>Marcadores</h2>
                <div className="tags">

        {
            tags.map((tag, index) => (
             <MovieItem
            key={String(index)}
            value={tag}
            onClick={() => handleRemoveTag(tag)}
            ></MovieItem>
            ))
        }

            <MovieItem
            isnew
            placeholder="Novo Marcador"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onClick={ handleAddTags }
            >
            </MovieItem>
                </div>

            </Section>
                


        <footer>
            <Button 
            title='Excluir filme'>
            </Button>
            <Button title='Salvar alterações'
            onClick={ handleNewMovieNote }>
            </Button>
        </footer>

            </form>
        </main>
        </Container>
    )
}