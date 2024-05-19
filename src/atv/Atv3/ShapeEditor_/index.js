import {Link} from "react-router-dom";
import ShapeEditor from "../../../componentes/atv3/ShapeEditor";


export default function ShapeEditor_()
{
    return(
        <div className='Principal'>
            <h1>ShapeEditor</h1>
            <ShapeEditor/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}