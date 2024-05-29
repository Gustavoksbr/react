
import {Link} from "react-router-dom";
import Profile from "../../../../componentes/atv3/Profile";


export default function Profile_()
{
    return(
        <div className='Principal'>
            <h1>Profile</h1>
            <Profile/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}