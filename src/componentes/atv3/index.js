import Toolbar from "./AlertButton";
import BotaoInutil from "./BotaoInutil";
import BotaoMeClicou from "./BotaoMeClicou";
import Gallery from "./Gallery";
import Form3 from "./Form3";
import Form from "./Form";
import BucketList from "./BucketList";
import Counter from "./Counter";
import MovingDot from "./MovingDot";
import ShapeEditor from "./ShapeEditor";


export default function Componente1(){
    return(
        <div>
        <h1>Teste</h1>
        <BotaoInutil/>
        <BotaoMeClicou/>
        <Toolbar
        onPlayMovie={()=>alert('Playing')}
        onUploadImage={()=>alert('Uploading!!')}/>
        <Gallery/>
        <Form3/>
        <BucketList/>
        <Counter/>
        <MovingDot/>
        <Form/>
        <ShapeEditor/>
        </div>
    )
}