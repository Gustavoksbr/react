
import {Link} from "react-router-dom";
import BucketList from "../../../../componentes/atv4/BucketList";


export default function BucketList_()
{
    return(
        <div className='Principal'>
            <h1>BucketList</h1>
            <BucketList/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}