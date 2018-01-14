import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OverviewPage from './components/OverviewPage';
import './app.scss';

class App extends Component {
  render() {
    return (
      <OverviewPage/>
    );
  }
}

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<App />, div);
