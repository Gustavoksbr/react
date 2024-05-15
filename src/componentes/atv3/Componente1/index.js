import Toolbar from "./AlertButton";
import BotaoInutil from "./BotaoInutil";
import BotaoMeClicou from "./BotaoMeClicou";


export default function Componente1(){
    return(
        <div>
        <h1>Teste</h1>
        <BotaoInutil/>
        <BotaoMeClicou/>
        <Toolbar
        onPlayMovie={()=>alert('Playing')}
        onUploadImage={()=>alert('Uploading!!')}/>

        </div>
    )
}