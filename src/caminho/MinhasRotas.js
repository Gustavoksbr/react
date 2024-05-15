//novas bibliotecas
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//componentes
import Home from "./Home";
import Atv1 from "../atv/Atv1";
import Atv2 from "../atv/Atv2";
import Atv3 from "../atv/Atv3";
import Componente1 from "../atv/Atv3/Componente1";

export default function MinhasRotas()
{
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv1" element={<Atv1/>} />
                <Route path="/Atv2" element={<Atv2/>} />
                <Route path="/Atv3" element={<Atv3/>} />
                <Route path="/Atv3/Componente1" element={<Componente1/>} />
            </Routes>
        </BrowserRouter>
    );
}