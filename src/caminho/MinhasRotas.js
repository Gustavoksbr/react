//novas bibliotecas
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//componentes
import Home from "./Home";
import Atv1 from "../atv/Atv1";
import Atv2 from "../atv/Atv2";

export default function MinhasRotas()
{
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv1" element={<Atv1/>} />
                <Route path="/Atv2" element={<Atv2/>} />
            </Routes>
        </BrowserRouter>
    );
}