import { useState } from 'react';
import Genero from '../Genero';
import Setinha from '../Setinha'
import './Bloco.css';

export default function Bloco() {
    const [total, setTotal] = useState(0)
    const[zerado, setZerado] = useState(true);

    function MudarTotal(acao) {
        if (acao === 'aumentar')
        {
            setTotal(total + 1);
            setZerado(false);
        }
        else if (acao === 'diminuir')
            {
                setTotal(total - 1);
            }

        else if (acao === 'zerar')
            {
                setZerado(true);
                setTotal(0);
            }
    }
    
    return (
        <div className='Bloco'>
            <Setinha recarregar={zerar => MudarTotal(zerar)}/>
            <p>{total}</p>
            <div className='Casal'>
                <Genero genero="homem" parcial={soma => MudarTotal(soma)} zerar={zerado}/>
                <Genero genero="mulher" parcial={soma => MudarTotal(soma)} zerar={zerado}/>
            </div>
        </div>
    );
} 