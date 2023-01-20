import React from 'react';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../images/logo.svg';

import Navbar from 'react-bootstrap/Navbar';

const navbarStyles = {
    backgroundColor: '#eeeeee',

}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyles}>
            <Container>
                <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
            </Container>
        </Navbar>
    )
}

export default Header