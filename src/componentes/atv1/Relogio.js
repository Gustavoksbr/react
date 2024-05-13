
function Relogio()
{


function tick()
{
    if (document.getElementById("texto2"))
        {
    document.getElementById('texto2').textContent = new Date().toLocaleTimeString();
        }
}
setInterval(tick,1000);

    return (
        <div>
            <h2> Agora são <p id="texto2"></p></h2>
        </div>
    );
}
 export default Relogio;