
function Letreiro()

{

let texto = "Conheça a FATEC".split("");
let lista = [];
lista = texto;
let contador = 0;
let texto_antigo = "";
let texto_novo = "";
let agora = '';

function tick()
{
    if(contador <lista.length)
    {
        let letra = lista[contador];
        contador ++;
        texto_novo = texto_antigo + letra;
        texto_antigo = texto_novo;
        agora = texto_novo;
        if (document.getElementById("texto"))
        {
         document.getElementById("texto").textContent = texto_novo;
        }
        
    }
    else
    {
        texto_novo = "";
        texto_antigo = "";
        contador = 0;
        agora = texto_novo;
        if (document.getElementById("texto"))
        {
        document.getElementById("texto").textContent = texto_novo;
        }
    }
    
}
setInterval(tick,450);
    return (

        <div>
            <h1 id='texto'>{agora}</h1>
            
        </div>
    );
}
 export default Letreiro;