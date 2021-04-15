import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import testImg from './testImg.jpg'
class App extends React.Component {
  render() {
    return <div className="app-container">
      <img src={testImg}></img>
      <h3>Search Component</h3>
    </div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)