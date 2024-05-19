
import {Link} from "react-router-dom";
import '../CSS/index.css';


export default function Atv3()
{
    return(
        <div className='Principal'>
            <h1>Atividade 3</h1>
            <Link to="/Atv3/Toolbar_"> Toolbar</Link>
            <Link to="/Atv3/Gallery_"> Gallery</Link>
            <Link to="/Atv3/Counter_"> Counter</Link>
            <Link to="/Atv3/Form_"> Form</Link>
            <Link to="/Atv3/MovingDot_"> MovingDot</Link>
            <Link to="/Atv3/Form2_"> Form2</Link>
            <Link to="/Atv3/Form3_"> Form3</Link>
            <Link to="/Atv3/List_"> List</Link>
            <Link to="/Atv3/List2_"> List2</Link>
            <Link to="/Atv3/ShapeEditor_"> ShapeEditor</Link>
            <Link to="/Atv3/CounterList_"> CounterList</Link>
            <Link to="/Atv3/List3_"> List3</Link>
            <Link to="/Atv3/List4_"> List4</Link>
            <Link to="/Atv3/BucketList_"> BucketList</Link>
            <Link to="/"> Retornar a página inicial</Link>
        </div>
    );
}