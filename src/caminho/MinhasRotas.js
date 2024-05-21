//novas bibliotecas
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//componentes
import Home from "./Home";
import Atv1 from "../atv/Atv1";
import Atv2 from "../atv/Atv2";
import Atv3 from "../atv/Atv3";
import Teste from '../atv/Teste';
import Toolbar_ from "../atv/Atv3/Toolbar_";
import Gallery_ from "../atv/Atv3/Gallery_";
import Counter_ from "../atv/Atv3/Counter_";
import Form_ from "../atv/Atv3/Form_";
import MovingDot_ from "../atv/Atv3/MovingDot_";
import Form2_ from "../atv/Atv3/Form2_";
import Form3_ from "../atv/Atv3/Form3_";
import List_ from "../atv/Atv3/List_";
import List2_ from "../atv/Atv3/List2_";
import ShapeEditor_ from "../atv/Atv3/ShapeEditor_";
import CounterList_ from "../atv/Atv3/CounterList_";
import List3_ from "../atv/Atv3/List3_";
import List4_ from "../atv/Atv3/List4_";
import BucketList_ from "../atv/Atv3/BucketList_";

export default function MinhasRotas()
{
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv1" element={<Atv1/>} />
                <Route path="/Atv2" element={<Atv2/>} />
                <Route path="/Atv3" element={<Atv3/>} />
                <Route path="/Teste" element={<Teste/>} />
                <Route path="/Atv3/Counter_" element={<Counter_/>}/>
                <Route path="/Atv3/Toolbar_" element={<Toolbar_/>} />
                <Route path="/Atv3/Gallery_" element={<Gallery_/>}/>
                <Route path="/Atv3/Form_" element={<Form_/>}/>
                <Route path="/Atv3/MovingDot_" element={<MovingDot_/>}/>
                <Route path="/Atv3/Form2_" element={<Form2_/>}/>
                <Route path="/Atv3/Form3_" element={<Form3_/>}/>
                <Route path="/Atv3/List_" element={<List_/>}/>
                <Route path="/Atv3/List2_" element={<List2_/>}/>
                <Route path="/Atv3/ShapeEditor_" element={<ShapeEditor_/>}/>
                <Route path="/Atv3/CounterList_" element={<CounterList_/>}/>
                <Route path="/Atv3/List3_" element={<List3_/>}/>
                <Route path="/Atv3/List4_" element={<List4_/>}/>
                <Route path="/Atv3/BucketList_" element={<BucketList_/>}/>
            </Routes>
        </BrowserRouter>
    );
}