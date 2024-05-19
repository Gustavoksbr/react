
import {Link} from "react-router-dom";
import Counter from "../../../componentes/atv3/Counter";


export default function Counter_()
{
    return(
        <div className='Principal'>
            <h1>Counter</h1>
            <Counter/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}