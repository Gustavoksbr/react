
import {Link} from "react-router-dom";
import PackingList from "../../../../componentes/atv3/PackingList";


export default function PackingList_()
{
    return(
        <div className='Principal'>
            <h1>PackingList</h1>
            <PackingList/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}