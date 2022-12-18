
import styled from 'styled-components'

export const Credits = styled.div`

footer{
    width: 100%;
    height: 5vh;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    h5{
        color: var(--midasWhite);
        font-family: 'Yellowtail', cursive;
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 0.1rem;
    }

    

}

`;

export function Footer(){
    return(
        <Credits>
            <footer>
                <h5>Created by leonardo</h5>
            </footer>
        </Credits>
    )
}