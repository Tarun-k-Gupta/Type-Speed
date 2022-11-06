import useWordGame from "./hooks/useWordGame.js"
import "./App.css"

function App() {
    
    const {textboxRef, handleChange, text, gameRunning, timeRemaining, startGame, wordCount} = useWordGame()

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea ref={textboxRef} onChange={handleChange} value={text} disabled={!gameRunning}/>
            <h4>Time reminaing: {timeRemaining}</h4>
            <button onClick={startGame} disabled={gameRunning}>Start</button> 
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}
export default App;