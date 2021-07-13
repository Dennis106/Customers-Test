import React, { Component } from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

class NavBar extends Component {
    onSearch = event => {
        let val = event.target.value;
        this.props.onSearch(val);
    }

    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>{this.props.title}</Navbar.Brand>
                { 
                    this.props.isSearch &&
                        <Form inline style={{marginLeft: 'auto'}}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onSearch.bind(this)}/>
                            <Button variant="outline-light">Search</Button>
                        </Form>
                }
            </Navbar>
        )
    };
}

export default NavBar;