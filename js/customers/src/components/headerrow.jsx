import React, { Component } from 'react';
import HeaderCell from './headercell';

class HeaderRow extends Component {
    render() { 
        const {onSort} = this.props;
        return ( 
            <div className="d-flex border-bottom py-2 bg-secondary">
                <HeaderCell value="ID" style={{width: '5%'}} onSort={onSort} column="id" />
                <HeaderCell value="Email" style={{width: '17%'}} onSort={onSort} column="email" />
                <HeaderCell value="First Name" style={{width: '10%'}} onSort={onSort} column="first_name" />
                <HeaderCell value="Last Name" style={{width: '10%'}} onSort={onSort} column="last_name" />
                <HeaderCell value="IP" style={{width: '12%'}} onSort={onSort} column="ip" />
                <HeaderCell value="Latitude" style={{width: '7%'}} onSort={onSort} column="latitude" />
                <HeaderCell value="Longitude" style={{width: '7%'}} onSort={onSort} column="longitude" />
                <HeaderCell value="Created" style={{width: '14%'}} onSort={onSort} column="created_at" />
                <HeaderCell value="Updated" style={{width: '14%'}} onSort={onSort} column="updated_at" />
                <HeaderCell value="Edit" style={{width: '4%'}} />
            </div>
        );
    }
}
 
export default HeaderRow;