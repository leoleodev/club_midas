
import styled from 'styled-components';

export const FromContainer = styled.div`

    .container{
        width: 100%;
        height: 100%;

        background: var(--midasYellow);
    }

`;


export function Form(){
    return(
        <FromContainer>

            <div className="container">
                <form action="">

                    

                </form>
            </div>

        </FromContainer>
    );
}