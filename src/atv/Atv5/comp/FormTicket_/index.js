
import {Link} from "react-router-dom";
import FormTicket from "../../../../componentes/atv5/FormTicket";


export default function FormTicket_()
{
    return(
        <div className='Principal'>
            <h1>FormTicket</h1>
            <FormTicket/>
            <Link to="/Atv5"> Retornar ao menu da atividade 5</Link>
        </div>
    );
}