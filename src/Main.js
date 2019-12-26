import React, { Component } from "react";

import { Route , NavLink , HashRouter} from "react-router-dom";

import Home from "./Home";

import { Container, Navbar , Button ,Icon } from "rbx";
import "rbx/index.css";
import logo from './static/logo192.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {
    render() {
      return (
        <HashRouter>
            <Container>
                <Navbar>
                    <Navbar.Brand>
                        <Navbar.Item href="#">
                            <img src={logo} alt="" role="presentation" width="112" height="50"/>
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Segment align="start">
                            <Navbar.Item>
                                <NavLink to="/">
                                    <Icon backgroundColor="light">
                                        <FontAwesomeIcon icon={faCircle} size="xs"/>
                                    </Icon>&nbsp;
                                    Personal
                                </NavLink>
                            </Navbar.Item>
                            <Navbar.Item>
                                <NavLink to="/Business">
                                    <Icon backgroundColor="light">
                                        <FontAwesomeIcon icon={faCircle} size="xs"/>
                                    </Icon>&nbsp;
                                    Business
                                </NavLink>
                            </Navbar.Item>
                        </Navbar.Segment>
                        <Navbar.Segment align="start">
                            <Navbar.Item><a href="#">About</a></Navbar.Item>
                            <Navbar.Item><a href="#">Pricing</a></Navbar.Item>
                            <Navbar.Item><a href="#">FAQ</a></Navbar.Item>
                            <Navbar.Item><a href="#">Contact Us</a></Navbar.Item>
                        </Navbar.Segment>  
                        <Navbar.Segment align="end">
                            <Navbar.Item>
                                <Button.Group>
                                    <Button rounded size="medium" color="light" className="btn_size halfColor"><span>LogIn</span></Button>
                                    <Button rounded size="medium" color="light" className="btn_size lightColor"><span>Join now</span></Button>
                                </Button.Group>
                            </Navbar.Item>
                        </Navbar.Segment>
                    </Navbar.Menu>
                </Navbar>

            </Container>
            <Route path="/" component={Home}/>
        </HashRouter>
      );
    }
  }

export default Main;

