import {Link} from "react-router-dom";
import Bloco from "../componentes/atv2/Bloco";
import './Centralizar.css';


export default function Atv2()
{
    return(
        <div className='Principal'>
            <h1>Atividade 2</h1>
            <Bloco/>
            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
}