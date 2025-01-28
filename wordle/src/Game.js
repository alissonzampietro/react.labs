import './Game.css';
import { SearchBar } from './fragments/SearchBar/SearchBar';
import { Word } from './sections/Word/Word';
import { useEffect, useState } from 'react';
import { words } from './constants/words';
import Logo from './logo.svg'
import { FortuneCookie } from './fragments/FortuneCookie/FortuneCookie';

export const CHANCES = 5;
export const CHANCES_SYSTEM = CHANCES - 1;
export const LETTER_SLOTS = 5;

function Game() {

  const [historyList, setHistorylist] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [targetWordSplitted, setTargetWordSplitted] = useState([]);
  const [isVictory, setIsVictory] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    reset();
  }, [])

  const reset = () => {
    const target = words[Math.floor(Math.random() * words.length)];
    setTargetWord(target);
    setTargetWordSplitted(target.split(''));
    setHistorylist([]);
    setEnd(false)
  }

  const submitWord = (guess) => {
    const isWordRight = targetWord === guess;
    const isEnd = isWordRight || historyList.length === CHANCES_SYSTEM;
    setEnd(isEnd);
    setIsVictory(isWordRight);
    guess = guess.toLowerCase()
    setHistorylist(l => [...l, guess])
  }

  return (
    <div className="Game">
      <header>
        <img src={Logo} alt="" width={300} />
      </header>
      <main>
        {(end && isVictory) && <FortuneCookie message="Parabéns!"><button onClick={() => reset()}>De novo</button></FortuneCookie>}
        {(end && !isVictory) && <div>
          <h2>VOCÊ PERDEU! A palavra é {targetWord}</h2>
            <button onClick={() => reset()}>De novo</button>
          </div>}
        <div>
          <div>
              {!end && <div><p>{CHANCES - historyList.length} tentativas: {targetWordSplitted.map(i => '____   ')}</p>
              <SearchBar maxAccepted={targetWordSplitted.length} submit={submitWord}/></div>}
              <div className="word-list">
                {historyList.map(guess => <Word word={guess} targetWordSplitted={targetWordSplitted}/>)}
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Game;
