import './Game.css';
import { SearchBar } from './fragments/SearchBar/SearchBar';
import { ShowWord } from './sections/ShowWord/ShowWord';
import { useEffect, useState } from 'react';
import { words } from './constants/words';
import Logo from './logo.svg'

function Game() {

  const [historyList, setHistorylist] = useState([]);
  const [word, setWord] = useState([]);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)].split(''));
  }, [])

  const submitWord = (typedWord) => {
    typedWord = typedWord.toLowerCase()
    setHistorylist(l => [...l, typedWord])
  }

  return (
    <div className="Game">
      <header>
        <img src={Logo} alt="" />
      </header>
      <main>
        <p>{word.map(i => '____   ')}</p>
          <SearchBar maxAccepted={word.length} submit={submitWord}/>
          <div className="word-list">
            {historyList.map(w => <ShowWord word={w} rightWords={word}/>)}
          </div>
      </main>
    </div>
  );
}

export default Game;
