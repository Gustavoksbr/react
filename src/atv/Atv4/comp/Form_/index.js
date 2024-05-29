
import {Link} from "react-router-dom";
import Form from "../../../../componentes/atv4/Form";


export default function Form_()
{
    return(
        <div className='Principal'>
            <h1>Form</h1>
            <Form/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}