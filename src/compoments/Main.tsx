
import styled from 'styled-components';
import iconInfo from '../images/iconInfo.svg';

export const Content = styled.div`

main{
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4{
        color: var(--midasWhite);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.09rem;
    }
    
}
.widthConatinerMain{
    width: 80%;
    height: 100%;    

    display: grid;
    grid-template-columns: 1fr 1fr;

}

.section1{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .space{
        width: 100%;
        height: 20%;
        img{
            width: 2rem;
        }

        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        h3{
            color: var(--midasWhite);
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.09rem;
            margin-right: 2rem;
            transition: 0.5s;
            display: flex;
            align-items: center;
        }
        h3:hover{
            cursor: pointer;
            color: var(--midasYellow);
        }
    }

    .marquee{
        height: 60%;
        border-right: 1px solid var(--midasWhite);
        display: flex;
        align-items: center;
        justify-content: center;

        h2{
            text-align: right;
            margin: 0 2rem 0 2rem;
            color: var(--midasYellow);
            span{
                color: var(--midasWhite);
            }
        }
    }

    
}

.section2{
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    

    .areaForm{
        width: 80%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        background: var(--midasYellow);

        h2{
            margin: 1.5rem 0 0 0;
        }
    }

    form{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        input{
            width: 70%;
            height: 3rem;
            border: none;
            border-radius: 0 10px 0 10px;
            padding: 0 1rem;
            font-family: 'Russo One', sans-serif;
            font-size: 1rem;            
        }
        button{
            width: 70%;
            height: 3rem;
            margin-top: 0.5rem;
            border: none;
            border-radius: 0 10px 0 10px;
            background: var(--midasBlack);
            color: var(--midasWhite);
            font-family: 'Russo One', sans-serif;
            font-size: 1rem;
            font-weight: 200;
            letter-spacing: 0.1rem;
            transition: 0.5s;
        }
        button:hover{
            color: var(--midasYellow);
            cursor: pointer;
        }
    }

}


@media(max-width: 1080px){

    main{

        height: 150vh;

        .widthConatinerMain{
            display: flex;
            flex-direction: column;
            align-items: center;

            .space{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .marquee{
                border: none;
            }

            .section1 .marquee h2{
                text-align: center;
            }
        }

        .section2 .areaForm{
            width: 95%;
        }

    }

}

@media(max-width: 720px){

    main{

    .widthConatinerMain{

        .section1 .marquee h2{
            text-align: justify;
        }
    }
}

}

@media(max-width: 600px){

    .widthConatinerMain{
        width: 100%;

    }

}

`;

export function Main(){
    return(
        <Content>
            <main>
                <div className="widthConatinerMain">
                    <section className='section1'>
                        <div className="space"></div>
                        <div className="marquee">
                            <h2>
                                Seja membro do <span>Club MIDAS</span> e obtenha descontos de 
                                combustível e outros benefícos
                            </h2>
                        </div>
                        <div className="space"> <h3>saiba mais <img src={iconInfo} alt="icon de informação" /> </h3> </div>

                    </section>
                    
                    <section className="section2">

                        <div className="areaForm">                            
                            <h2>
                                Cadastre-se aqui!
                            </h2>

                            <form>
                                <input type="text" name="name" id="name" placeholder='Nome:'/>
                                <input type="number" name="cpf" id="cpf" placeholder="CPF:" />
                                <input type="number" name="rg" id="rg" placeholder="RG:" />
                                <input type="email" name="email" id="email" placeholder='Email'/>
                                <input type="tel" name="tel" id="tel" placeholder="Telefone" />

                                <button type="button" id="buttonSubmit">CADASTRAR</button>
                            </form>
                        </div>
                    </section>
                </div>
                                
            </main>
        </Content>
    )
}