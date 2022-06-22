import logo from './logo.svg';
import './App.css';
import ExampleComponent, { AnotherComponent } from './Components/ExampleComponent';
import Greeting from './Components/Greeting';
function App() {
  return (
    <div className="App">
      <ExampleComponent/>
      <AnotherComponent/>
      <Greeting name ="Matt" age="23"/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
