import { Container } from './styles'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

export function Movie({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            
            <Stars
            rating= {data.rating }
            isbigsize={true}
            ></Stars>

            <p> {data.description} </p>


            {
                data.tag && (
                <footer>
                
                {data.tags.map((tag)=> (
                    <Tag
                    key= { tag.id }
                    title= { tag.tag_name }>
                    </Tag>
                ))}
                
                </footer>   
                )
                
            }
            
        </Container>
    )
}