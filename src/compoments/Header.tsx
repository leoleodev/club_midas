
import styled from 'styled-components';

export const Titles = styled.div`

    header{
        width: 100%;
        height: 15vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: teal;
    }
    
`;

export function Header(){
    return(
        <Titles>
            <header>
                <h1 className="logo">Club MIDAS</h1>
                <h2 className="subTitle logo">MIDAS Logística</h2>
            </header>
        </Titles>
    );
}