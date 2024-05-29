import {Link} from "react-router-dom";
import List3 from "../../../../componentes/atv4/List3";


export default function List3_()
{
    return(
        <div className='Principal'>
            <h1>List3</h1>
            <List3/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}