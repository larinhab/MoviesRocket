import { ButtonBack } from "../../components/ButtonBack";
import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Tags } from "../../components/Tags";
import { Container} from "./styles";

export function CreateMovie() {
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
                maxLength="5">
                </Input>
            </div>
                <TextArea 
                title="Obs"
                placeholder="Observações"></TextArea>

            <Section>
                <h2>Marcadores</h2>
                <div className="tags">

                <MovieItem 
             //   key={String(index)}
            // value={tag}
            //</div>onClick={() => handleRemoveTag(tag)}
                >
                </MovieItem>
            
            
            <MovieItem
            // isNew
            placeholder="Novo Marcador"
            // value={newTag}
            // onChange={(e) => setNewTAg(e.target.value)}
            // onClick={handleAddTag}
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