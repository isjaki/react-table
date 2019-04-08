import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import TableRows from './components/TableRows/TableRows';
import Pagination from './components/UI/Pagination/Pagination';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
  state = {
    data: null,
    dataSize: 'small',
    pageToRender: 0,
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

    this.setState({
      loading: true
    });

    axios.get(dataLink).then(response => {
      const receivedData = response.data;
      const splittedData = [];
      const chunk = 20;

      for (let i = 0, j = receivedData.length; i < j; i+=chunk) {
        splittedData.push(receivedData.slice(i, i + chunk));
      }

      this.setState({
        data: splittedData,
        loading: false
      });
    });
  }

  toNextPageHandler = () => {
    let newPage = this.state.pageToRender + 1;

    if (newPage >= this.state.data.length) {
      newPage = this.state.data.length - 1;
    }

    this.setState({
      pageToRender: newPage
    });
  }

  toPreviousPageHandler = () => {
    let newPage = this.state.pageToRender - 1;

    if (newPage < 0) {
      newPage = 0;
    }

    this.setState({
      pageToRender: newPage
    });
  }

  render() {
    let tableRows = null;

    if (this.state.data && !this.state.loading) {
      tableRows = <TableRows
        tableData={this.state.data[this.state.pageToRender]} />;
    }

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
          {tableRows}
        </table>
        {this.state.loading ? <Spinner /> : null}
        {
          this.state.data ? 
          <Pagination
            currentPage={this.state.pageToRender + 1}
            numberOfPages={this.state.data.length}
            toNextPageHandler={this.toNextPageHandler}
            toPreviousPageHandler={this.toPreviousPageHandler} />
           : null
        }
      </div>
    );
  }
}

export default App;
