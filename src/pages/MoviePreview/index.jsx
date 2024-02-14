import { ButtonBack } from "../../components/ButtonBack";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Container } from "./styles";
import { Tags } from "../../components/Tags";
import { FiClock } from "react-icons/fi";

import CustomScroll from "react-custom-scroll";
import moment from 'moment-timezone'

// const ActualDate = moment
//.utc(data_updated_at)
//.tz("Brasilia")
// .format("DD/MM/YYYY HH:mm:ss")


export function MoviePreviewNote() {
    return(
        <Container>
            <Header></Header>

            <main>
            <ButtonBack></ButtonBack>

            <header>
             <div>
                <h1>Clube da Luta</h1>
                <Stars isBigSize></Stars>
            </div>

            <div className="subtitle">
            <div className="author">
                
                <img src="https://www.github.com/larinhab.png" alt="Nome do Usuário" />
                <p>
                    Por Lara Viana
                </p>
            </div>

            <div className="actualdate"> 
                <FiClock></FiClock>
                <p>23/05/22 às 08:00</p>
            </div>
            </div>

            </header>
            
            <section>
                <Tags title='Ação'></Tags>
                <Tags title='Luta'></Tags>
                <Tags title='Aventura'></Tags>
            </section>

            <CustomScroll> 
                <p>
                Jack (Edward Norton) é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. Nesses encontros ele passa a conviver com pessoas problemáticas como a viciada Marla Singer (Helena Bonham Carter) e a conhecer estranhos como Tyler Durden (Brad Pitt). Misterioso e cheio de ideias, Tyler apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.
                Clube de Luta começa in medias res (do latim "no meio das coisas", é uma técnica literária utilizada quando a narrativa não começa no início dos eventos, mas sim no meio): Tyler com uma arma na boca do narrador, minutos antes de uma explosão. A narração inicia quase no final, que podemos adivinhar que não será feliz. O filme vai nos mostrar quem são aqueles homens e os eventos que os conduziram até aquele ponto.
                Percebemos que estamos perante um narrador que não é onisciente; pelo contrário, está confuso, enlouquecido pela insônia e o cansaço. Aquilo que ele nos conta, o que vemos através dos seus olhos não é, necessariamente, a realidade. Não podemos confiar nele, como vamos percebendo ao longo do filme.
                Essa desconfiança é confirmada quando descobrimos, já perto da conclusão da narrativa, que se tratam de personalidades dissociativas. E que, afinal, aquele homem esteve sempre sozinho, lutando contra si mesmo.
                Quando obtemos essa informação, percebemos que existiam já indícios: quando se conhecem têm a mesma mala, no ônibus só pagam uma passagem, o narrador nunca está ao mesmo tempo com Tyler e Marla.
                </p>
            </CustomScroll>
        
        </main>
        </Container>
    )
}