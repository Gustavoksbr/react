
import {Link} from "react-router-dom";
import Counter from "../../../../componentes/atv4/Counter";


export default function Counter_()
{
    return(
        <div className='Principal'>
            <h1>Counter</h1>
            <Counter/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}