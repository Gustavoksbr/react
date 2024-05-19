
import {Link} from "react-router-dom";
import BucketList from "../../../componentes/atv3/BucketList";


export default function BucketList_()
{
    return(
        <div className='Principal'>
            <h1>BucketList</h1>
            <BucketList/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}