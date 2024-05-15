// ! Primeria versão:

/* function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>

    );

}
export default function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing!">
                PLay Movie
            </AlertButton>
            <AlertButton message="uploading!" >
                Upload Image
            </AlertButton >
        </div >
    );
} */

// ! Segunda versão:

/* function Button({onClick, children})
{
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({movieName})
{
    function handlePlayClick(){
        alert(`Playing ${movieName}!`)
    }
    return(
        <Button onClick={handlePlayClick}>
            PLay "{movieName}"
        </Button>
    );
}

function UploadButton(){
    return (
        <Button onClick={()=> alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

export default function Toolbar(){
    return(
        <div>
            <PlayButton movieName="Kiki's Delivery Service"/>
            <UploadButton/>
        </div>
    );
}
 */

// ! terceira versão(tem props):

/* export default function Toolbar({onPlayMovie, onUploadImage})
{
    return(
    <div>
        <Button onClick={onPlayMovie}>
            Play Movie
        </Button>
        <Button onClick={onUploadImage}>
            Upload Image
        </Button>
    </div>
    )
}

function Button({onClick,children})
{
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
} */

// ! quarta versão:


function Button({onClick,children})
{
    return(
        <button onClick={e=>{
        e.stopPropagation();
        onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar()
{
    return(
    <div onClick={()=>{
        alert('You clicked on the toolbar');
    }}>
        <Button onClick={()=>alert('Playing!')}>
            Play Movie
        </Button>
        <Button onClick={()=>alert('Uploading!')}>
            Upload Image
        </Button>
    </div>
    )
}



