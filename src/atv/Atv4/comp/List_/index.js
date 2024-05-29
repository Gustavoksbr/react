import {Link} from "react-router-dom";
import List from "../../../../componentes/atv4/List";


export default function List_()
{
    return(
        <div className='Principal'>
            <h1>List</h1>
            <List/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}