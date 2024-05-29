
import {Link} from "react-router-dom";
import CounterList from "../../../../componentes/atv4/CounterList";


export default function CounterList_()
{
    return(
        <div className='Principal'>
            <h1>CounterList</h1>
            <CounterList/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}