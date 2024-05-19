import {Link} from "react-router-dom";
import List3 from "../../../componentes/atv3/List3";


export default function List3_()
{
    return(
        <div className='Principal'>
            <h1>List3</h1>
            <List3/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}