
import { Link } from "react-router-dom";
import '../CSS/index.css';



export default function Atv4() {

    const lista = ["Toolbar", "Gallery", "Counter", "MovingDot", "ShapeEditor", "Form", "Form2", "Form3", "List", "List2", "List3", "List4", "CounterList", "BucketList"];

    return (
        <div className='Principal'>
            <h1>Atividade 4</h1>
            <ul>

            
        {lista.map((elemento) => (
          <li key={elemento.id}><Link to = {'/Atv4/comp/' + elemento+'_'}>{elemento}</Link></li>
        ))}
            </ul>


            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
        }
