import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
class App extends React.Component {
  render() {
    return <div className="app-container"><h3>Search Component</h3></div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)