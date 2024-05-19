import {Link} from "react-router-dom";
import MovingDot from "../../../componentes/atv3/MovingDot";


export default function MovingDot_()
{
    return(
        <div className='Principal'>
            <h1>MovingDot</h1>
            <MovingDot/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}