
import {Link} from "react-router-dom";
import Toolbar from "../../../componentes/atv3/Toolbar";


export default function Toolbar_()
{
    return(
        <div className='Principal'>
            <h1>Toolbar</h1>
            <Toolbar/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}