import { useState, useEffect } from 'react';
import Botao from '../Botao';
import './Genero.css';


export default function Genero(props) {
    let genero = props.genero;

    const [count, setCount] = useState(0);

    useEffect(()=>{    if(props.zerar===true && count!==0)
        {
            setCount(0);
        }})

    function aumentar() {
        setCount(count + 1);
        props.parcial('aumentar');
    }
    function diminuir() {
        if(count >0)
            {
                setCount(count - 1);
                props.parcial('diminuir');
            }
    }
    return (
        <div className='Genero'>
            <img src={"imagens/"+ genero +".png"} alt='imagem genero' className='imagem'/>
            <div>
                <Botao conta="+" onClick={aumentar} />
                <Botao conta="-" onClick={diminuir} />
            </div>
            <p>{genero}</p>
            <p>{count}</p>
        </div>
    );
} 
