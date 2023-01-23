import styled from 'styled-components';

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
            text-transform: uppercase;
            
            ::-webkit-input-placeholder  {
                color: var(--secubdaryTexts);
                font-size: 0.95rem;
            }
            input:-moz-placeholder {
                color: var(--secubdaryTexts);
                font-size: 0.95rem;
            }
            textarea:-moz-placeholder {
                color: var(--secubdaryTexts);
                font-size: 0.95rem;
            }
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

                h3{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }

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

    

}

@media(max-width: 600px){

    .widthConatinerMain{
        width: 100%;

    }

    .section2 form input{
        width: 85%;
    }

}

`;