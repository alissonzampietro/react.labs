import logo from './logo.svg';
import './App.css';
import ClickTracker from './components/click-tracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <ClickTracker />
      </header>
    </div>
  );
}

export default App;
