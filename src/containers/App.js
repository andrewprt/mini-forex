import React from 'react';
import InputValue from '../components/InputValue';
import CurrencyList from '../components/CurrencyList';
import '../styles/App.css';
import DropdownCurr from '../components/DropdownCurr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="currency--header">
          USD - United States Dollar
          <div className="currency--sub">
            USD
            <InputValue />
          </div>
        </div>
        <div className="currency--body">
          <CurrencyList />
          <DropdownCurr />
        </div>
      </header>
    </div>
  );
}

export default App;
