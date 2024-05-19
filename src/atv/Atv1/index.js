import Relogio from '../../componentes/atv1/Relogio';
import Letreiro from '../../componentes/atv1/Letreiro';
import {Link} from "react-router-dom";
import '../CSS/index.css';

export default function Atv1()
{
    return(
        <div className='Principal'>
            <h1>Atividade 1</h1>
            <Relogio />
            <Letreiro />
            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
}