import React, { Component } from 'react';

import Table from './table'
import NavBar from './navbar';
import Pagination from './pagination';
import customersData from '../data/customers.json'

class Customers extends Component {
  state = {
    currentPage: 1,
    totalPage: 0,
    listPerPage: process.env.REACT_APP_LIST_PER_PAGE, // To test only Env file
    searchString: "",
    customers: []
  }

  componentDidMount() {
    const listPerPage = this.state.listPerPage;
    let count = customersData.length;
    let totalPage = Math.ceil(count/listPerPage);

    this.setState({customers: customersData, totalPage: totalPage});
  }

  searchQuery(keyword) {
    const searchedCustomers = (keyword === "") ? 
      customersData
      : customersData.filter(customer => 
          (
              customer.email.includes(keyword)
              || customer.first_name.includes(keyword)
              || customer.last_name.includes(keyword)
              || customer.ip.includes(keyword)
              || (''+customer.latitude).includes(keyword)
              || (''+customer.longitude).includes(keyword)
              || (''+customer.created_at).includes(keyword)
              || (''+customer.updated_at).includes(keyword)
          )
    );
    return searchedCustomers;
  }

  handleSearch = value => {
    const filteredCustomers = this.searchQuery(value);
    
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
