import './Game.css';
import { SearchBar } from './fragments/SearchBar/SearchBar';
import { Word } from './sections/Word/Word';
import { useEffect, useState } from 'react';
import { words } from './constants/words';
import Logo from './logo.svg'
import { FortuneCookie } from './fragments/FortuneCookie/FortuneCookie';

function Game() {

  const [historyList, setHistorylist] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [targetWordSplitted, setTargetWordSplitted] = useState([]);
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
    setEnd(targetWord === guess);
    guess = guess.toLowerCase()
    setHistorylist(l => [...l, guess])
  }

  return (
    <div className="Game">
      <header>
        <img src={Logo} alt="" width={300} />
      </header>
      <main>
        {targetWord}
        {end && <p>Parabéns! <FortuneCookie /> <button onClick={() => reset()}>De novo</button></p>}
        {!end && <div>
          {historyList.length < 5 && <div>
            <p>{5 - historyList.length} tentativas: {targetWordSplitted.map(i => '____   ')}</p>
              <SearchBar maxAccepted={targetWordSplitted.length} submit={submitWord}/>
              <div className="word-list">
                {historyList.map(guess => <Word word={guess} targetWordSplitted={targetWordSplitted}/>)}
              </div>
          </div>}
          {historyList.length >= 5 && <div>
            <h1>VOCÊ PERDEU: {targetWord}</h1>
              <button onClick={() => reset()}>De novo</button>
            </div>}
        </div>}
      </main>
    </div>
  );
}

export default Game;
