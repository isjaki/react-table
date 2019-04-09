import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Table from './components/Table/Table';
import DataLoader from './components/DataLoader/DataLoader';
import InfoBlock from './components/InfoBlock/InfoBlock';
import AddRow from './components/AddRow/AddRow';
import Filter from './components/Filter/Filter';
import Pagination from './components/UI/Pagination/Pagination';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
  state = {
    receivedData: null,
    splittedData: null,
    dataSize: 'small',
    pageToRender: 0,
    infoToDisplay: null,
    dataToSearch: null,
    columnToSearch: 'id',
    loading: false,
    showAddRowForm: false,
    newRowData: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      phone: null
    }
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
        '&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}' + 
        '&description={lorem|32}';
    }

    this.setState({
      loading: true,
      pageToRender: 0
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
        infoToDisplay: null,
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

  showInfoHandler = (tableRowIndex) => {
    const pageWithData = this.state.splittedData[this.state.pageToRender];
    const tableRowClicked = pageWithData[tableRowIndex];

    this.setState({
      infoToDisplay: tableRowClicked
    });
  }

  showFormHandler = () => {
    this.setState(prevState => ({
      showAddRowForm: !prevState.showAddRowForm
    }));
  }

  inputChangeHandler = (event) => {
    const inputToChange = event.target.name;

    const unpdatedRowData = {
      ...this.state.newRowData
    }

    unpdatedRowData[inputToChange] = event.target.value;

    this.setState({
      newRowData: unpdatedRowData
    });
  }

  addRowHandler = (event) => {
    event.preventDefault();

    const updatedData = [
      ...this.state.receivedData
    ];

    updatedData.unshift(this.state.newRowData);

    const updatedSplittedData = [];
    const chunk = 20;

    for (let i = 0, j = updatedData.length; i < j; i+=chunk) {
      updatedSplittedData.push(updatedData.slice(i, i + chunk));
    }

    this.setState({
      receivedData: updatedData,
      splittedData: updatedSplittedData
    });
  }

  dataToSearchHandler = (event) => {
    this.setState({
      dataToSearch: event.target.value
    });
  }

  columnToSearchHandler = (event) => {
    this.setState({
      columnToSearch: event.target.value
    });
  }

  findDataHandler = () => {
    const dataToFilter = [
      ...this.state.receivedData
    ];
    const columnToSearch = this.state.columnToSearch;
    const dataToSearch = this.state.dataToSearch;
    let filteredData = null;

    if (!dataToSearch) {
      filteredData = dataToFilter;
    } else {
      filteredData = dataToFilter.filter(dataItem => {
          return !!~dataItem[columnToSearch].toString().indexOf(dataToSearch);
      });
    }

    if (!filteredData.length) return;

    const updatedSplittedData = [];
    const chunk = 20;

    for (let i = 0, j = filteredData.length; i < j; i+=chunk) {
      updatedSplittedData.push(filteredData.slice(i, i + chunk));
    }

    this.setState({
      splittedData: updatedSplittedData
    });
  }

  render() {
    let table = null;
    let pagination = null;
    let infoBlock = null;
    let addRow = null;
    let filter = null;

    if (this.state.splittedData && !this.state.loading) {
      table = <Table 
        data={this.state.splittedData[this.state.pageToRender]}
        showInfoHandler={this.showInfoHandler} />;

      pagination = <Pagination
        currentPage={this.state.pageToRender + 1}
        numberOfPages={this.state.splittedData.length}
        toNextPageHandler={this.toNextPageHandler}
        toPreviousPageHandler={this.toPreviousPageHandler} />;
      
      addRow = <AddRow
        showFormHandler={this.showFormHandler}
        inputChangeHandler={this.inputChangeHandler}
        addRowHandler={this.addRowHandler}
        showAddRowForm={this.state.showAddRowForm}
        newRowData={this.state.newRowData} />;

      filter = <Filter
        dataToSearchHandler={this.dataToSearchHandler}
        columnToSearchHandler={this.columnToSearchHandler}
        findDataHandler={this.findDataHandler} />
    }

    if (this.state.infoToDisplay && !this.state.loading) {
      infoBlock = <InfoBlock
        infoToDisplay={this.state.infoToDisplay} />
    }

    return (
      <div className="App">
        <DataLoader
          selectDataSizeHandler={this.selectDataSizeHandler}
          getDataHandler={this.getDataHandler} />
        {filter}
        {addRow}
        {pagination}
        {table}
        {infoBlock}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default App;
