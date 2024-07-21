/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

export default function Game() {
    const choicesRef = useRef(null);
    const [score, setScore] = useState(0);
    const [user, setUser] = useState(null);
    const [bot, setBot] = useState(null);
    const [result, setResult] = useState(null);
    const [cases, setCases] = useState([
        { name: "paper", beats: "rock" },
        { name: "scissors", beats: "paper" },
        { name: "rock", beats: "scissors" }
    ]);

    useEffect(() => {
        const choices = choicesRef.current.querySelectorAll(".choice");
        const game = document.getElementById("game");
        const playing = document.getElementById("playing");
        const resultContainer = document.getElementById("result");

        const handleChoiceClick = (event) => {
            game.classList.add("hidden");
            playing.classList.remove("hidden");
            playing.classList.add("playing-page");

            const choiceBtn = event.currentTarget;
            const choiceName = choiceBtn.dataset.choice;
            console.log(`User choice: ${choiceName}`);

            const selectedChoice = cases.find(c => c.name === choiceName);

            const computerAvail = ["rock", "paper", "scissors"];
            const computerChoice = computerAvail[Math.floor(Math.random() * 3)];
            console.log(`Computer choice: ${computerChoice}`);

            const determineResult = () => {
                let resultText;
                if (selectedChoice.name === computerChoice) {
                    console.log("Draw");
                    resultText = "Draw";
                } else if (selectedChoice.beats === computerChoice) {
                    console.log("You won!");
                    setScore(s => s + 1);
                    resultText = "You won!";
                } else {
                    console.log("You lost");
                    setScore(s => Math.max(0, s - 1));
                    resultText = "You lost";
                }
                setResult(resultText);
                resultContainer.classList.remove("hidden")
                setBot(computerChoice);
            };
            setUser(selectedChoice.name);

            setTimeout(determineResult, 2000);

        };

        const playAgain = () => {
            game.classList.remove("hidden");
            playing.classList.add("hidden");
            playing.classList.remove("playing-page");
            resultContainer.classList.add("hidden")
            setUser(null);
            setBot(null);
            setResult(null);
        };

        choices.forEach(choiceBtn => {
            choiceBtn.addEventListener("click", handleChoiceClick);
        });

        const playBtn = document.getElementById("playBtn");
        playBtn.addEventListener("click", playAgain);

        return () => {
            choices.forEach(choiceBtn => {
                choiceBtn.removeEventListener("click", handleChoiceClick);
            });
            playBtn.removeEventListener("click", playAgain);
        };
    }, [cases]);

    return (
        <>
            <header className="border-outline h-[150px] rounded-2xl p-5 border-[3px]">
                <nav className="flex flex-row items-center justify-between h-full">
                    <img src="/images/logo.svg" alt="Logo" />
                    <div className="bg-white rounded-md p-2 h-full w-32 text-center flex flex-col justify-center">
                        <p className="text-score-text text-sm">Score</p>
                        <h1 className="text-dark-text leading-[.9] text-[3.5rem] font-bold p-0 m-0">{score}</h1>
                    </div>
                </nav>
            </header>
            <section ref={choicesRef} id='game' className="">
                <div className='game-container relative'>
                    <img src="/images/bg-triangle.svg" className="absolute translate-y-[10%] -z-10" alt="Background" />
                    <button data-choice="paper" className="choice paper">
                        <div>
                            <img src="/images/icon-paper.svg" alt="Paper" />
                        </div>
                    </button>
                    <button data-choice="scissors" className="choice scissors">
                        <div>
                            <img src="/images/icon-scissors.svg" alt="Scissors" />
                        </div>
                    </button>
                    <button data-choice="rock" className="choice rock">
                        <div>
                            <img src="/images/icon-rock.svg" alt="Rock" />
                        </div>
                    </button>
                </div>
            </section>
            <section id='playing' className='hidden message pt-12'>
                <h1 className='user-pick'>You picked</h1>
                {user && (
                    <button data-choice={user} className={`pageChoice user ${user}`}>
                        <div>
                            <img src={`/images/icon-${user}.svg`} alt={user} />
                        </div>
                    </button>
                )}
                <div className='result hidden' id='result'>
                    <h1 className='text-[32px]' id='messageText'>{result}</h1>
                    <button className="outline-none font-barlow uppercase tracking-widest font-semibold bg-transparent text-black text-sm rounded-md border bg-white transition px-5 py-1 w-full" id='playBtn'>Play again</button>
                </div>
                <h1 className='bot-pick'>The house picked</h1>
                <div className='bot-shadow w-[130px] h-[130px] bg-[#0f172a73] rounded-full'></div>
                {bot && (
                    <button data-choice={bot} className={`pageChoice bot ${bot}`}>
                        <div>
                            <img src={`/images/icon-${bot}.svg`} alt={bot} />
                        </div>
                    </button>
                )}
            </section>
        </>
    );
}
