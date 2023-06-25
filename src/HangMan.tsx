const HEAD = (
    <div style={{
        height: "40px",
        width: "40px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-25px"
    }} />
)

const BODY = (
    <div style={{
        height: "100px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: "100px",
        right: "0"
    }} />
)

const RIGHT_ARM = (
    <div style={{
        height: "10px",
        width: "90px",
        background: "black",
        position: "absolute",
        top: "140px",
        right: "-90px",
        rotate: "30deg",
        transformOrigin: "left top"
    }} />
)

const LEFT_ARM = (
    <div style={{
        height: "10px",
        width: "90px",
        background: "black",
        position: "absolute",
        top: "140px",
        right: "10px",
        rotate: "-30deg",
        transformOrigin: "right top"
    }} />
)
const RIGHT_LEG = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: "190px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }} />
)

const LEFT_LEG = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: "190px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }} />
)

const BODY_PARTS = [HEAD,BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanProps ={
    numberOfGuesses : number
}

function HangMan({numberOfGuesses}: HangmanProps) {
  return (
    <div style={{position: "relative"}} >

        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{background:"black" , height: "50px", width: "10px" , position:"absolute", right:"0" , top: "0"}} />

        <div style={{background:"black" , height: "10px", width: "200px" , marginLeft: "120px" }}/>

        <div style={{background:"black" , height: "320px", width:"10px", marginLeft:"120px"}}/>

        <div style={{background: "black" , height: "10px", width: "250px"}}/>

    </div>
  )
}

export default HangMan
