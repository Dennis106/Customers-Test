import React, { Component } from 'react';
import customersData from '../data/customers.json'
import Table from './table'
import NavBar from './navbar';
import Pagination from './pagination';

class Customers extends Component {
  state = {
    currentPage: 1,
    totalPage: 0,
    listPerPage: 12,
    searchString: "",
    customers: []
  }

  componentDidMount() {
    const listPerPage = this.state.listPerPage;
    let count = customersData.length;
    let totalPage = Math.ceil(count/listPerPage);

    this.setState({customers: customersData, totalPage: totalPage});
  }

  handleSearch = value => {
    const filteredCustomers = (value === "") ? 
      customersData
      : customersData.filter(customer => 
          (
              customer.email.includes(value)
              || customer.first_name.includes(value)
              || customer.last_name.includes(value)
              || customer.ip.includes(value)
              || (''+customer.latitude).includes(value)
              || (''+customer.longitude).includes(value)
              || (''+customer.created_at).includes(value)
              || (''+customer.updated_at).includes(value)
          )
    );
    const listPerPage = this.state.listPerPage;
    let count = filteredCustomers.length;
    let totalPage = Math.ceil(count/listPerPage);

    this.setState({customers: filteredCustomers, totalPage: totalPage, currentPage: 1, searchString: value});
  };

  handleSort = (value, direction) => {
    let customers = this.state.customers;
    customers = customers.sort((a, b) => a[value] > b[value] ? direction : -direction);
    this.setState({customers});
  }

  handlePrevPage = () => {
    this.setState({currentPage: this.state.currentPage-1});
  }

  handleNextPage = () => {
    this.setState({currentPage: this.state.currentPage+1});
  }

  handleFirstPage = () => {
    this.setState({currentPage: 1});
  }

  handleLastPage = () => {
    this.setState({currentPage: this.state.totalPage});
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBar 
          onSearch={this.handleSearch}
          title={"Customers List"}
          isSearch={true} />
        <div className={"p-4"}>
          <Table 
            customers={this.state.customers}
            currentPage = {this.state.currentPage}
            listPerPage = {this.state.listPerPage}
            onSort = {this.handleSort}
             />
          <Pagination 
            currentPage = {this.state.currentPage}
            totalPage = {this.state.totalPage}
            onPrevPage = { this.handlePrevPage }
            onNextPage = {this.handleNextPage }
            onFirstPage = { this.handleFirstPage }
            onLastPage = { this.handleLastPage } />
        </div>
      </React.Fragment>
    );
  }
}

export default Customers;
