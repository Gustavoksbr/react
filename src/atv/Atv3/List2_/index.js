import {Link} from "react-router-dom";
import List2 from "../../../componentes/atv3/List2";


export default function List2_()
{
    return(
        <div className='Principal'>
            <h1>List2</h1>
            <List2/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}