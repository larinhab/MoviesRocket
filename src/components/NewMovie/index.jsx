import { Contaier } from './styles'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

export function NewMovie({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>Clube da Luta</h1>
            <Stars></Stars>
            <p>Descrição do filme</p>

            <footer>
                <Tags></Tags>
            </footer>
        </Container>
    )
}