
import {Link} from "react-router-dom";
import '../Centralizar.css';


export default function Atv3()
{
    return(
        <div className='Principal'>
            <h1>Atividade 3</h1>
            <Link to="/Atv3/Componente1"> Componente1</Link>
            <Link to="/Componente2"> Componente2</Link>
            <Link to="/Componente3"> Componente3</Link>
            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
}