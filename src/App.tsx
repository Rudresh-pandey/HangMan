import GuessWord from './GuessWord';
import HangMan from './HangMan';
import Keyboard from './Keyboard';
import words from './wordList.json';

import {useState} from 'react';
function App() {
  const [generatedWord, setGeneratedWord] = useState(()=>{
      return words[Math.floor(Math.random() * words.length)];
  })
  
  const [guessedLetters, setGuessedLetters] =useState<string[]>([])

  return (
    <div style={{
        maxWidth: "800px",
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: "center"
    }}>
    <div style={{fontSize: "1.5rem" , textAlign: "center"}} > win lose </div>
    <HangMan/>
    <GuessWord/>
    <Keyboard/> 
    </div>
  )
}

export default App
