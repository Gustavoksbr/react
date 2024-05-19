
import {Link} from "react-router-dom";
import Form2 from "../../../componentes/atv3/Form2";


export default function Form2_()
{
    return(
        <div className='Principal'>
            <h1>Form2</h1>
            <Form2/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}