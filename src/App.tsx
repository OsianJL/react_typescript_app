import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/testComponent';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  function getPerson() {
    if (!name) {
      setName('Osián');
    }
    if (name) {
      setSurname('Jorge Lezcano');
    }
    if (name && surname){
      setSurname('')
    }
     
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            getPerson();
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Hello name={name} surname={surname} getPerson={getPerson} />
    </>
  );
};

export default App;
