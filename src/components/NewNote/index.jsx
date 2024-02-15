import { Container } from './styles'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

export function NewNote({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>Clube da Luta</h1>
            <Stars></Stars>
            <p>                Jack (Edward Norton) é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. 
                Nesses encontros ele passa a conviver com pessoas problemáticas como a viciada Marla Singer (Helena Bonham Carter) e a conhecer estranhos como Tyler Durden (Brad Pitt). Misterioso e cheio de ideias, Tyler apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.
                Clube de Luta começa in medias res (do latim "no meio das coisas", é uma técnica literária utilizada quando a narrativa não começa no início dos eventos, mas sim no meio): Tyler com uma arma na boca do narrador, minutos antes de uma explosão. A narração inicia quase no final, que podemos adivinhar que não será feliz. 
                O filme vai nos mostrar quem são aqueles homens e os eventos que os conduziram até aquele ponto.</p>

            <footer>
                <Tags title="Ação"></Tags>
                <Tags title="Aventura"></Tags>
                <Tags title="Luta"></Tags>
            </footer>
        </Container>
    )
}