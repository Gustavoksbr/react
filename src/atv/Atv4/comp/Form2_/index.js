
import {Link} from "react-router-dom";
import Form2 from "../../../../componentes/atv4/Form2";


export default function Form2_()
{
    return(
        <div className='Principal'>
            <h1>Form2</h1>
            <Form2/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}