import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <div>Hello</div>;
  }
}

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<App />, div);
