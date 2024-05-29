
import {Link} from "react-router-dom";
import List from "../../../../componentes/atv3/List";


export default function NList_()
{
    return(
        <div className='Principal'>
            <h1>List</h1>
            <List/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}