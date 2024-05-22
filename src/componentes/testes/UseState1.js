import{useState} from 'react';

export default function UseState1()
{
    return(
        <>
            <h1>Contadores</h1>
             <MyButton/>
            <MyButton/> 
        </>
    );


 function MyButton(){
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicado {count} vezes
        </button>
    );
} 


}


