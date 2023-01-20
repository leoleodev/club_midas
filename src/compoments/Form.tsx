
import styled from 'styled-components';

export const FromContainer = styled.div`

    .container{
        width: 80%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: red;
        
    }

`;


export function Form(){
    return(
        <FromContainer>

            <div className="container">
                <h2>
                    Cadastre-se aqui!
                </h2>
                <form>
                    <input type="text" name="name" id="name" placeholder='Nome'/>
                    <input type="text" name="lastName" id="lastName" placeholder='Sobrenome'/>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <input type="tel" name="tel" id="tel" placeholder="Telefone" />

                    <button type="button" id="buttonSubmit">CADASTRAR</button>
                </form>
            </div>

        </FromContainer>
    );
}