const HEAD = (
    <div style={{
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }} />
)

const BODY = (
    <div style={{
        height: "120px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "0"
    }} />
)

const RIGHT_ARM = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "30deg",
        transformOrigin: "left top"
    }} />
)

const LEFT_ARM = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
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
        top: "210px",
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
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }} />
)

function HangMan() {
  return (
    <div style={{position: "relative"}} >

        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div style={{background:"black" , height: "50px", width: "10px" , position:"absolute", right:"0" , top: "0"}} />

        <div style={{background:"black" , height: "10px", width: "200px" , marginLeft: "120px" }}/>

        <div style={{background:"black" , height: "400px", width:"10px", marginLeft:"120px"}}/>

        <div style={{background: "black" , height: "10px", width: "250px"}}/>

    </div>
  )
}

export default HangMan
