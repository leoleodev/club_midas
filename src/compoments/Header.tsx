
import styled from 'styled-components';

export const Titles = styled.div`

    header{
        width: 100%;
        height: 15vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .widthConatinerHeader{
        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .logo{
        color: var(--midasYellow);
    }
    .subTitle{
        font-family: 'Yellowtail', cursive;
        font-size: 1.2rem;
        letter-spacing: 0.09rem;
    }

    @media(max-width: 600px){
        .widthConatinerHeader{
            width: 90%;
        }
    }
    
`;

export function Header(){
    return(
        <Titles>
            <header>
                <div className="widthConatinerHeader">
                    <h1 className="logo">Club MIDAS</h1>
                    <h2 className="subTitle logo">MIDAS Logística</h2>
                </div>
            </header>
        </Titles>
    );
}