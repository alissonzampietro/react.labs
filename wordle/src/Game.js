import './Game.css';
import { SearchBar } from './fragments/SearchBar/SearchBar';
import { ShowWord } from './sections/ShowWord/ShowWord';
import { useEffect, useState } from 'react';
import { words } from './constants/words';
import Logo from './logo.svg'
import { FortuneCookie } from './fragments/FortuneCookie/FortuneCookie';

function Game() {

  const [historyList, setHistorylist] = useState([]);
  const [word, setWord] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    reset();
  }, [])

  const reset = () => {
    const selected = words[Math.floor(Math.random() * words.length)];
    setWord(selected);
    setWordList(selected.split(''));
    setHistorylist([]);
    setEnd(false)
  }

  const submitWord = (typedWord) => {
    setEnd(word === typedWord);
    typedWord = typedWord.toLowerCase()
    setHistorylist(l => [...l, typedWord])
  }

  return (
    <div className="Game">
      <header>
        <img src={Logo} alt="" width={300} />
      </header>
      <main>
        {end && <p>Parabéns! <FortuneCookie /> <button onClick={() => reset()}>De novo</button></p>}
        {!end && <div>
          {historyList.length < 5 && <div>
            <p>{5 - historyList.length} tentativas: {wordList.map(i => '____   ')}</p>
              <SearchBar maxAccepted={wordList.length} submit={submitWord}/>
              <div className="word-list">
                {historyList.map(w => <ShowWord word={w} rightWords={wordList}/>)}
              </div>
          </div>}
          {historyList.length >= 5 && <div>
            <h1>VOCÊ PERDEU: {word}</h1>
              <button onClick={() => reset()}>De novo</button>
            </div>}
        </div>}
      </main>
    </div>
  );
}

export default Game;
