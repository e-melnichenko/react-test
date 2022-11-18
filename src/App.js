import logo from './logo.svg';
import './App.css';
import {Component1} from "./Component1.js";
import {useState} from "react";

function App() {
  const [userId, setUserId] = useState('');
  const [pageId, setPageId] = useState('');


  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <p>
        <label>
          user id:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)}/>
        </label>
        <label>
          page id:
          <input type="text" value={pageId} onChange={(e) => setPageId(e.target.value) }/>
        </label>

      </p>
      <Component1 userId={userId} pageId={pageId}/>
    </div>
  );
}

export default App;
