
import {Link} from "react-router-dom";
import Form from "../../../componentes/atv3/Form";


export default function Form_()
{
    return(
        <div className='Principal'>
            <h1>Form</h1>
            <Form/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}