
import iconInfo from '../images/iconInfo.svg';

import { Content } from '../styles/main';

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