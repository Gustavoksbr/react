import {Link} from "react-router-dom";
import MovingDot from "../../../../componentes/atv4/MovingDot";


export default function MovingDot_()
{
    return(
        <div className='Principal'>
            <h1>MovingDot</h1>
            <MovingDot/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}