import { ButtonBack } from "../../components/ButtonBack";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Container, Content } from "./styles";
import { Tags } from "../../components/Tags";

export function MoviePreviewNote() {
    return(
        <Container>
            <Header></Header>

            <ButtonBack></ButtonBack>
        <Content>
           
           <div>
                <h1>Clube da Luta</h1>
                <Stars></Stars>
                <title>Por Lara Viana</title>
                <date>23/05/22</date>
                <Tags title='Ação'></Tags>
                <Tags title='Luta'></Tags>
                <Tags title='Sangue'></Tags>
            </div>

            <p>Clube de Luta começa in medias res (do latim "no meio das coisas", é uma técnica literária utilizada quando a narrativa não começa no início dos eventos, mas sim no meio): Tyler com uma arma na boca do narrador, minutos antes de uma explosão. A narração inicia quase no final, que podemos adivinhar que não será feliz. O filme vai nos mostrar quem são aqueles homens e os eventos que os conduziram até aquele ponto.
                Percebemos que estamos perante um narrador que não é onisciente; pelo contrário, está confuso, enlouquecido pela insônia e o cansaço. Aquilo que ele nos conta, o que vemos através dos seus olhos não é, necessariamente, a realidade. Não podemos confiar nele, como vamos percebendo ao longo do filme.
                Essa desconfiança é confirmada quando descobrimos, já perto da conclusão da narrativa, que se tratam de personalidades dissociativas. E que, afinal, aquele homem esteve sempre sozinho, lutando contra si mesmo.
                Quando obtemos essa informação, percebemos que existiam já indícios: quando se conhecem têm a mesma mala, no ônibus só pagam uma passagem, o narrador nunca está ao mesmo tempo com Tyler e Marla.</p>
        </Content>
        </Container>
    )
}