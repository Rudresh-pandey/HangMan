type HangmanWordProps = {
  guessedLetters : string[],
  wortToGuess: string
  reveal?: boolean
}

function GuessWord({guessedLetters, wordToGuess , reveal=false}: HangmanWordProps) {
  
  return (
    <div style={{ display: "flex", gap:".25em", fontSize:"4rem", fontWeight: "bold", fontFamily:"monospace", textTransform:"uppercase"}}>
      {wordToGuess.split("").map((letter, index)=>{
        return(
          <span style={{borderBottom: ".1em solid black"}} key={index} >
            <span style={{
              visibility:guessedLetters.includes(letter) || reveal ?"visible":"hidden" ,
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}>
            {letter}</span>
            </span>
        )
      })}
    </div>
  )
}

export default GuessWord
