
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

    padding: 1rem 0 1rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        height: 70%;
        padding: 0 4rem 0 2rem;
        text-align: right;
        border-right: 1px solid var(--midasWhite);

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        
        color: var(--midasYellow);

        span{
            color: var(--midasWhite);
        }

    }
}

.section2{
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    form{
        width: 80%;
        height: 90%;       

        background: var(--midasYellow);
    }

}


`;

export function Main(){
    return(
        <Content>
            <main>
                <div className="widthConatinerMain">
                    <section className='section1'>
                        <h2>
                            Seja membro do <span>Club MIDAS</span> e obtenha descontos de 
                            combustível e outros benefícos
                        </h2>
                        
                    </section>
                    
                    <section className="section2">

                        <form action=""></form>

                    </section>
                </div>
                <h4>saiba mais</h4>                
            </main>
        </Content>
    )
}