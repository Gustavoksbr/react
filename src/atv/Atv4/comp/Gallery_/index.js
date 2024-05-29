
import {Link} from "react-router-dom";
import Gallery from "../../../../componentes/atv4/Gallery";


export default function Gallery_()
{
    return(
        <div className='Principal'>
            <h1>Gallery</h1>
            <Gallery/>
            <Link to="/Atv4"> Retornar ao menu da atividade 4</Link>
        </div>
    );
}