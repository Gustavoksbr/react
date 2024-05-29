import {Link} from "react-router-dom";
import List4 from "../../../../componentes/atv4/List4";


export default function List4_()
{
    return(
        <div className='Principal'>
            <h1>List4</h1>
            <List4/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}