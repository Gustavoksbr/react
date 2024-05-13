import { useState } from 'react';

export default function Setinha(props) {

    const [zero, setZero] = useState();

    function zerar(){
        setZero('zerar');
        props.recarregar(zero);
    }
    return (
        <>
        <button onClick={zerar}>
            zerar
        </button>
        </>
    );
} 
