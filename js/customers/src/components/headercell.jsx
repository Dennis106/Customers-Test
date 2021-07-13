import React, { Component } from 'react';

class HeaderCell extends Component {
    state = {
        sortDirection : 1
    }

    SortList() {
        const sortDirection = this.state.sortDirection;
        this.props.onSort && this.props.onSort(this.props.column, sortDirection);
        this.setState({sortDirection: -sortDirection});
    }

    render() { 
        return ( 
            <div style={this.props.style} className="span12 text-center">
                <span onClick={() => this.SortList()} className="span4 text-light font-weight-bold" style={{fontSize: '80%'}}>{this.props.value}</span>
            </div>
        );
    }
}
 
export default HeaderCell;