
import {Link} from "react-router-dom";
import TodoList2 from "../../../../componentes/atv3/TodoList2";


export default function TodoList2_()
{
    return(
        <div className='Principal'>
            <h1>TodoList2</h1>
            <TodoList2/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}