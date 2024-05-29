
import {Link} from "react-router-dom";
import Profile2 from "../../../../componentes/atv3/Profile2";


export default function Profile2_()
{
    return(
        <div className='Principal'>
            <h1>Profile2</h1>
            <Profile2/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}