import React, { Component } from 'react';

class DataCell extends Component {
    render() { 
        return ( 
            <div style={this.props.style} className="text-center">
                <span className="span4" style={{fontSize: '80%'}}>{this.props.value}</span>
            </div>
        );
    }
}
 
export default DataCell;