import { ButtonBack } from "../../components/ButtonBack";
import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Tags } from "../../components/Tags";
import { Container} from "./styles";
import { useState } from "react";
import { Stars } from "../../components/Stars";


export function CreateMovie() {
    const [ tags, setTags] = useState([])
    const [ newTag, setNewTag] = useState("")

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    const [ stars, setStars ] = useState([])
    const [ rating, setRating] = useState("")
    
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
                title="título"
                placeholder="Título"/>

                <Input 
                type="number" 
                title="rating" 
                placeholder="Sua nota (de 0 à 5)"
                minLength="0"
                maxLength="5"

                value= { rating }
                onChange={(e) => setRating(e.target.value)}>
                </Input>

                <Stars
                rating 
                isbigsize
                onChange = {(e) => setStars(e.taget.value)}
                onClick={ handleRating }>
                </Stars>
                
                
            
            </div>

                <TextArea 
                title="Obs"
                placeholder="Observações"></TextArea>

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
            <Button title='Excluir filme'></Button>
            <Button title='Salvar alterações'></Button>
        </footer>

            </form>
        </main>
        </Container>
    )
}