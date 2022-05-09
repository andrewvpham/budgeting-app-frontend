import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Expenses from './Expenses';
import reportWebVitals from './reportWebVitals';
import Overview from './Overview';
import Income from './Income';
import Navigation from './Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}



class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

root.render(
  <React.StrictMode>
    <Navigation />
    <Overview />
    <Income />
    <Expenses />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
