import { ButtonBack } from "../../components/ButtonBack";
import { Section } from "../../components/Section"
import { Header } from "../../components/Header";
import { Button } from '../../components/Button'
import { Stars } from "../../components/Stars";
import { Movie } from "../../components/Movie";
import CustomScroll from "react-custom-scroll";
import { Tags } from "../../components/Tags";
import { useNavigate, useParams } from "react-router-dom"; //busca os parametros buscados na rota
import { useState, useEffect } from "react";
import { FiClock } from "react-icons/fi";
import { api } from "../../service/api";
import { Container } from "./styles";
import moment from 'moment-timezone'

// const ActualDate = moment
//.utc(data_updated_at)
//.tz("Brasilia")
// .format("DD/MM/YYYY HH:mm:ss")


export function MovieDetails() {
    const [ data, setData ] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover a nota deste filme?")

        if(confirm){
            await api.delete(`notes/${params.id}`)
            navigate("/")
        }
    }
    
    useEffect(() => {
        async function searchNote(){
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        searchNote()
    })

    return(
        <Container>
            <Header></Header>
            

        { // ENVOLVO POR CHAVES PARA MOSTRAR O MAIN SOMENTE SE EXISTIR CONTEUDO
            data &&  // SE TEM CONTEUDO MOSTRA OS DADOS SE NÃO NADA
            <main>
                <ButtonBack></ButtonBack>

            <header>
             <div>
                <h1>{data.movie_title}</h1>
                <Stars 
                rating = { data.rating }
                isbigsize={true}></Stars>
            </div>

            <div className="subtitle">
            <div className="author">  
                <img src="https://www.github.com/larinhab.png" alt="Nome do Usuário" />
                <p>
                    
                </p>
            </div>

            <div className="actualdate"> 
                <FiClock></FiClock>
                <p>{data.created_at}</p>
            </div>
            </div>

            </header>

            {
            data.tags &&
            <Section
            title= "">

            <CustomScroll> 
                <p>
                {data.movie_description}
                </p>
            </CustomScroll>

        
                {
                    data.tags.map(tag => (
                        <Tags 
                        key={String(tag.id)}
                        title={tag.tag_name}></Tags>
                    ))

                }
            </Section>
        }
        
        <Button
        title="Excluir nota"
        onClick= { handleRemove }>
        </Button>
        
            </main>
            
    }
        
        </Container>
    )
}