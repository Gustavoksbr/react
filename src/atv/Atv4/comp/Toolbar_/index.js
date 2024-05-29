
import {Link} from "react-router-dom";
import Toolbar from "../../../../componentes/atv4/Toolbar";


export default function Toolbar_()
{
    return(
        <div className='Principal'>
            <h1>Toolbar</h1>
            <Toolbar/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}