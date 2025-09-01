import { FaPlay } from "react-icons/fa";





const IconButton=({hei,wid,src,onClick }) =>{
    return(
        <button onClick={onClick}>
            <img height={`${hei}px`} width={`${wid}px`} src={src} alt="" />
        </button>
    )

}

const Play= ({wid,hei,onClick}) =>{
    return(
        <IconButton src="/play1.svg" onClick={onClick} hei={hei} wid={wid} />
    )
}

const Pause= ({wid,hei,onClick}) =>{
    return(
        <IconButton src="/pause1.svg" onClick={onClick} hei={hei} wid={wid}/>
    )
}

const Next= ({ wid,hei,onClick}) =>{
    return(
        <IconButton src="/next1.svg" onClick={onClick} hei={hei} wid={wid}/>
    )
}

const Prev= ({wid,hei,onClick}) =>{
    return(
        <IconButton src="/prev1.svg" onClick={onClick} hei={hei} wid={wid}/>
    )
}
export  {Play,Pause,Next,Prev}