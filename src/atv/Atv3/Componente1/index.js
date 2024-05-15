
import {Link} from "react-router-dom";
import Componente1 from "../../../componentes/atv3/Componente1";


export default function Atv3()
{
    return(
        <div className='Principal'>
            <h1>Componente 1</h1>
            <Componente1/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}