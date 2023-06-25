import GuessWord from './GuessWord';
import HangMan from './HangMan';
import Keyboard from './Keyboard';
import words from './wordList.json';

import {useCallback, useEffect, useState} from 'react';


function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [generatedWord, setGeneratedWord] = useState(getWord);
  
  const [guessedLetters, setGuessedLetters] =useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !generatedWord.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = generatedWord.split("").every(letter=> guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string)=>{
    if(guessedLetters.includes(letter) || isLoser||isWinner) return
    setGuessedLetters(currentLetters=>[...currentLetters, letter])
  },[guessedLetters, isWinner, isLoser])




  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return()=>{
      document.removeEventListener("keypress",handler)
    }
  },[guessedLetters])


  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key
      if(key !== "Enter" ) return
      e.preventDefault()
      setGuessedLetters([])
      setGeneratedWord(getWord())
    }
    document.addEventListener("keypress", handler)
    return()=>{
      document.removeEventListener("keypress",handler)
    }
  },[])

  return (
    <div style={{
        maxWidth: "800px",
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: "center"
    }}>
    <div style={{fontSize: "1.5rem" , textAlign: "center"}} >
      {isWinner && "Congratulations😀!!! You guessed all right, refresh PAGE or press ENTER to play again"}
      {isLoser && "OOps😟!!! You guessed it wrong, refresh PAGE or press ENTER to play again"}
      </div>
    <HangMan  numberOfGuesses={incorrectLetters.length} />
    <GuessWord reveal={isLoser} guessedLetters = {guessedLetters} wordToGuess={generatedWord}/>
    <div style={{alignSelf:"stretch"} }>

    <Keyboard activeLetters={guessedLetters.filter(letter => generatedWord.includes(letter))}
           inactiveLetters= {incorrectLetters} 
           addGuessedLetter={addGuessedLetter}
           disabled={isLoser || isWinner}/> 
    </div>
    </div>
  )
}

export default App
