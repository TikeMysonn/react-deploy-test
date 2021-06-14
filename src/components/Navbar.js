
import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { useHistory } from 'react-router-dom';


const NavBar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand onClick={() => { history.push("/") }}>Nextagram</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink onClick={()=>{history.push("/")}}>Home</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Alone</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default NavBar;