
import { Titles } from "../styles/header";

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