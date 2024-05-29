//novas bibliotecas
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//componentes
import Home from "./Home";
import Atv1 from "../atv/Atv1";
import Atv2 from "../atv/Atv2";
import Atv3 from "../atv/Atv3";
import rotasAtv3 from './rotasAtv3';
import Atv4 from "../atv/Atv4";
import rotasAtv4 from './rotasAtv4';

const listaAtv3 = ["GalleryProfile_", "TodoList_", "TodoList2_", "Profile_", "Profile2_", "NList_", "TeaGathering_"];

const listaAtv4 = ["Toolbar_", "Gallery_", "Counter_", "MovingDot_", "ShapeEditor_", "Form_", "Form2_", "Form3_", "List_", "List2_", "List3_", "List4_", "CounterList_", "BucketList_"];

export default function MinhasRotas()
{
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv1" element={<Atv1/>} />
                <Route path="/Atv2" element={<Atv2/>} />
            

                <Route path="/Atv3" element={<Atv3/>} />
                {listaAtv3.map((elemento) => {
                    const Componente = rotasAtv3[elemento];
                    if (!Componente) {
                        console.error(`Componente não encontrado: ${elemento}`);
                        return null;
                      }
          return <Route key = {elemento} path = {'/Atv3/comp/' + elemento} element ={<Componente/>}/>
        })}

                
                <Route path="/Atv4" element={<Atv4/>} />
                {listaAtv4.map((elemento) => {
                    const Componente = rotasAtv4[elemento];
                    if (!Componente) {
                        console.error(`Componente não encontrado: ${elemento}`);
                        return null;
                      }
          return <Route key = {elemento} path = {'/Atv4/comp/' + elemento} element ={<Componente/>}/>
        })}
            </Routes>
        </BrowserRouter>
    );
}