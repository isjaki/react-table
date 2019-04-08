import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: null,
    dataSize: 'small',
    loading: false
  }

  selectDataSizeHandler = (event) => {
    this.setState({
      dataSize: event.target.value
    });
  }

  getDataHandler = () => {
    let dataLink = null;

    if (this.state.dataSize === 'small') {
      dataLink = 'http://www.filltext.com/' + 
        '?rows=32&id={number|1000}&firstName={firstName}' +
        '&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}' + 
        '&address={addressObject}&description={lorem|32}';
    }

    if (this.state.dataSize === 'large') {
      dataLink = 'http://www.filltext.com/' + 
        '?rows=1000&id={number|1000}&firstName={firstName}' + 
        '&delay=3&lastName={lastName}&email={email}' + 
        '&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    }

    axios.get(dataLink).then(response => {
      const receivedData = response.data;
      const splittedData = [];
      const chunk = 30;

      for (let i = 0, j = receivedData.length; i < j; i+=chunk) {
        splittedData.push(receivedData.slice(i, i + chunk));
      }

      this.setState({
        data: splittedData
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Form">
          Выберете набор данных:
          <select onChange={this.selectDataSizeHandler} name="options">
            <option value="small">Маленький</option>
            <option value="large">Большой</option>
          </select>
          <button onClick={this.getDataHandler}>Загрузить данные</button>
        </div>
        <table>
          <thead>
             <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>phone</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default App;
