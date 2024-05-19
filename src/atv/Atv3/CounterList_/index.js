
import {Link} from "react-router-dom";
import CounterList from "../../../componentes/atv3/CounterList";


export default function CounterList_()
{
    return(
        <div className='Principal'>
            <h1>CounterList</h1>
            <CounterList/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}