
import { Link } from "react-router-dom";
import '../CSS/index.css';



export default function Atv5() {

    const lista = ["FormQuiz", "FormTicket", "Accordion", "Messenger"]

    return (
        <div className='Principal'>
            <h1>Atividade 4</h1>
            <ul>

            
        {lista.map((elemento) => (
          <li key={elemento.id}><Link to = {'/Atv5/comp/' + elemento+'_'}>{elemento}</Link></li>
        ))}
            </ul>


            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
        }
