import { useState } from "react";
import "./App.css";
import AuthForm from "./assets/AuthForm";

function App() {
    const [user, setUser] = useState(null);
    const [sequence, setSequence] = useState([]);
    const [playerIndex, setPlayerIndex] = useState(0);
    const [level, setLevel] = useState(1);
    const [activeBox, setActiveBox] = useState(-1);
    const [showing, setShowing] = useState(true);
    const [started, setStarted] = useState(false);
    const [message, setMessage] = useState("Press Start");

    function getRandomBox() {
        return Math.floor(Math.random() * 9);
    }

    function startGame() {
        let firstBox = getRandomBox();
        let newSequence = [firstBox];
        setSequence(newSequence);
        setLevel(1);
        setPlayerIndex(0);
        setStarted(true);
        setMessage("Watch!");
        showBox(newSequence);
    }

    function showBox(mySequence) {
        setShowing(true);
        let i = 0;
        function nextBox() {

            if (i < mySequence.length) {
                setActiveBox(mySequence[i]);
                setTimeout(function () {
                    setActiveBox(-1);
                    i = i + 1;
                    setTimeout(function () {
                        nextBox();
                    }, 500);
                }, 1000);

            } else {
                setShowing(false);
                setPlayerIndex(0);
                setMessage("Your turn!");
            }
        }
        nextBox();
    }

    function clickBox(number) {

        if (showing === true) {
            return;
        }
        if (number !== sequence[playerIndex]) {
            setMessage("Wrong!");
            setStarted(false);
            return;
        }
        setActiveBox(number);
        setTimeout(function () {
            setActiveBox(-1);
        }, 300);

        let nextIndex = playerIndex + 1;
        if (nextIndex === sequence.length) {
            setMessage("Correct!");
            setTimeout(function () {
                let newBox = getRandomBox();
                let newSequence = [...sequence, newBox];
                setSequence(newSequence);
                setLevel(level + 1);
                setPlayerIndex(0);
                setMessage("Watch!");
                showBox(newSequence);
            }, 1000);
        } else {
            setPlayerIndex(nextIndex);
        }
    }

    if (user === null) {
        return (
            <AuthForm onLogin={setUser} />
        );
    }
    return (
        <div className="game">
            <h1>Memory Sequence Game</h1>
            <h3>Welcome, {user}!</h3>
            <div className="info">
                <p>Level: {level}</p>
                <p>Sequence: {sequence.length}</p>
            </div>
            <h2>{message}</h2>

            <div className="board">
                <button  className={activeBox === 0 ? "active" : ""} onClick={() => clickBox(0)}></button>
                <button  className={activeBox === 1 ? "active" : ""} onClick={() => clickBox(1)}></button>
                <button  className={activeBox === 2 ? "active" : ""} onClick={() => clickBox(2)}></button>
                <button  className={activeBox === 3 ? "active" : ""} onClick={() => clickBox(3)}></button>
                <button  className={activeBox === 4 ? "active" : ""} onClick={() => clickBox(4)}></button>
                <button  className={activeBox === 5 ? "active" : ""} onClick={() => clickBox(5)}></button>
                <button  className={activeBox === 6 ? "active" : ""} onClick={() => clickBox(6)}></button>
                <button  className={activeBox === 7 ? "active" : ""} onClick={() => clickBox(7)}></button>
                <button  className={activeBox === 0 ? "active" : ""} onClick={() => clickBox(0)}></button>
            </div>
            {!started && (
                <button className="start" onClick={startGame}>
                    Start Game
                </button>
            )}
        </div>
    );
}

export default App;