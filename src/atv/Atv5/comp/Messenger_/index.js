
import {Link} from "react-router-dom";
import Messenger from "../../../../componentes/atv5/Messenger";


export default function Messenger_()
{
    return(
        <div className='Principal'>
            <h1>Messenger</h1>
            <Messenger/>
            <Link to="/Atv5"> Retornar ao menu da atividade 5</Link>
        </div>
    );
}