import {Link} from "react-router-dom";
import ShapeEditor from "../../../../componentes/atv4/ShapeEditor";


export default function ShapeEditor_()
{
    return(
        <div className='Principal'>
            <h1>ShapeEditor</h1>
            <ShapeEditor/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}