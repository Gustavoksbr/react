
import {Link} from "react-router-dom";
import Form3 from "../../../../componentes/atv4/Form3";


export default function Form3_()
{
    return(
        <div className='Principal'>
            <h1>Form3</h1>
            <Form3/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}