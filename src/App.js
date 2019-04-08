import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Table from './components/Table/Table';
import DataLoader from './components/DataLoader/DataLoader';
import Pagination from './components/UI/Pagination/Pagination';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
  state = {
    receivedData: null,
    splittedData: null,
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
        receivedData: receivedData,
        splittedData: splittedData,
        loading: false
      });
    });
  }

  toNextPageHandler = () => {
    let newPage = this.state.pageToRender + 1;

    if (newPage >= this.state.splittedData.length) {
      newPage = this.state.splittedData.length - 1;
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
    let table = null;
    let pagination = null;

    if (this.state.splittedData && !this.state.loading) {
      table = <Table data={this.state.splittedData[this.state.pageToRender]} />;

      pagination = <Pagination
        currentPage={this.state.pageToRender + 1}
        numberOfPages={this.state.splittedData.length}
        toNextPageHandler={this.toNextPageHandler}
        toPreviousPageHandler={this.toPreviousPageHandler} />
    }

    return (
      <div className="App">
        <DataLoader
          selectDataSizeHandler={this.selectDataSizeHandler}
          getDataHandler={this.getDataHandler} />
        {table}
        {this.state.loading ? <Spinner /> : null}
        {pagination}
      </div>
    );
  }
}

export default App;
