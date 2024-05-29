
import {Link} from "react-router-dom";
import TodoList from "../../../../componentes/atv3/TodoList";


export default function TodoList_()
{
    return(
        <div className='Principal'>
            <h1>TodoList</h1>
            <TodoList/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}