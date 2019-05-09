import React from 'react';
import "./indexNav.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
// import { NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active">
                        Adam Rajchwald
          </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/projects" activeClassName="active" className="yah">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/contact" activeClassName="active">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        );
    }
}