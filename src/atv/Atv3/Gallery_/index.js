
import {Link} from "react-router-dom";
import Gallery from "../../../componentes/atv3/Gallery";


export default function Gallery_()
{
    return(
        <div className='Principal'>
            <h1>Gallery</h1>
            <Gallery/>
            <Link to="/Atv3"> Retornar ao menu da atividade 3</Link>
        </div>
    );
}