import React, { Component } from 'react';
import DataRow from './datarow';
import HeaderRow from './headerrow';

class Table extends Component {
    render() {
        const {customers, currentPage, listPerPage, onSort} = this.props;
        const startIndex = (currentPage-1)*listPerPage;
        
        return (
            <div className="border">
                <HeaderRow onSort={onSort}/>
                { 
                    customers.slice(startIndex, startIndex+listPerPage)
                    .map(customer => (
                        <DataRow className="border-bottom" customer={customer} key={customer.id} />
                )) }
                
            </div> 
        );
    }
}
 
export default Table;