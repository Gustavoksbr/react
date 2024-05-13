import{useState} from 'react';

export default function UseState2()
{
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }

    return(
        <>
            <h1>Contadores</h1>
             <MyButton count={count} onClick = {handleClick}/>
            <MyButton count={count} onClick = {handleClick}/> 
        </>
    );

 function MyButton({count,onClick}){

    return (
        <button onClick={onClick}>
            Clicado {count} vezes
        </button>
    );
} 


}
