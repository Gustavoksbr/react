import UseState1 from "../../componentes/testes/UseState1";
import UseState2 from "../../componentes/testes/UseState2";
import {Link} from "react-router-dom";
import './Centralizar.css';


export default function Teste()
{
    return(
        <div className='Principal'>
            <h1>Testando coisas</h1>
            <UseState1/>
            <UseState2/>
            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
}