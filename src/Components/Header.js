import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to="/" style={{textDecoration:'none'}}>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://i.postimg.cc/pdz25J0X/1692481.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}
                            Employee Directory
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Link>
        </div>
    )
}

export default Header