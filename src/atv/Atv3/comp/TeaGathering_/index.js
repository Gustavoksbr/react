
import {Link} from "react-router-dom";
import TeaGathering from "../../../../componentes/atv3/TeaGathering";


export default function TeaGathering_()
{
    return(
        <div className='Principal'>
            <h1>TeaGathering</h1>
            <TeaGathering/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}