
import { Link } from "react-router-dom";
import '../CSS/index.css';



export default function Atv3() {

     const lista = ["GalleryProfile","TodoList","TodoList2","Profile","Profile2","NList","TeaGathering"];

    return (
        <div className='Principal'>
            <h1>Atividade 3</h1>
            <ul>

            
        {lista.map((elemento) => (
          <li key={elemento.id}><Link to = {'/Atv3/comp/' + elemento+'_'}>{elemento}</Link></li>
        ))}
            </ul>


            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
        }
