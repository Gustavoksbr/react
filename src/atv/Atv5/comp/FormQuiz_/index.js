
import {Link} from "react-router-dom";
import FormQuiz from "../../../../componentes/atv5/FormQuiz";


export default function FormQuiz_()
{
    return(
        <div className='Principal'>
            <h1>FormQuiz</h1>
            <FormQuiz/>
            <Link to="/Atv5"> Retornar ao menu da atividade 5</Link>
        </div>
    );
}