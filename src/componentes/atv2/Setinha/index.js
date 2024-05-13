export default function Setinha(props) {


    function zerar(){

        props.recarregar('zerar');
    }
    return (
        <>
        <button onClick={zerar}>
            zerar
        </button>
        </>
    );
} 
