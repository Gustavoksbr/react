
import {Link} from "react-router-dom";
import Accordion from "../../../../componentes/atv5/Accordion";


export default function Accordion_()
{
    return(
        <div className='Principal'>
            <h1>Accordion</h1>
            <Accordion/>
            <Link to="/Atv5"> Retornar ao menu da atividade 5</Link>
        </div>
    );
}