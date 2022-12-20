import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarComponent.css';

function NavbarComponent() {
	return (
		<Navbar bg='light' expand='lg'>
			<Container className='navbar-container'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='contact'>Contact</Nav.Link>
						<NavDropdown title='Projects' id='basic-nav-dropdown'>
							<NavDropdown.Item href='kanban-board'>
								Kanban-Board (WIP)
							</NavDropdown.Item>
							<NavDropdown.Item href='facebook-simple'>
								Facebook Simple Clone
							</NavDropdown.Item>
							<NavDropdown.Item href='Recipe'>Cooking Recipe</NavDropdown.Item>
							{/* <NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item> */}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
