import React, { Component } from 'react';
import DataCell from './datacell';
import {PencilSquare} from 'react-bootstrap-icons';

class DataRow extends Component {
    render() { 
        const {customer, className} = this.props;
        return ( 
            <div className={"d-flex py-2 "+className}>
                <DataCell value={customer.id} style={{width: '5%'}} />
                <DataCell value={customer.email} style={{width: '17%'}} />
                <DataCell value={customer.first_name} style={{width: '10%'}} />
                <DataCell value={customer.last_name} style={{width: '10%'}} />
                <DataCell value={customer.ip} style={{width: '12%'}} />
                <DataCell value={customer.latitude} style={{width: '7%'}} />
                <DataCell value={customer.longitude} style={{width: '7%'}} />
                <DataCell value={customer.created_at} style={{width: '14%'}} />
                <DataCell value={customer.updated_at} style={{width: '14%'}} />
                <div style={{width: '4%'}} className="text-center">
                    <a href="/profile"><PencilSquare/></a>
                </div>
            </div>
        );
    }
}
 
export default DataRow;