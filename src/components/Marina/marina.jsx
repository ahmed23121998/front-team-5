import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default function Marina() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to={"/"} className='navbar-brand text-warning' style={{ margin: "15px" }}>Front Website</Link>
                    <Nav className="me-auto">
                        <NavLink to={"/"} style={{ margin: "15px" }}
                        className={({isActive})=>(isActive ? "nav-link text-danger" : "nav-link")}
                        >Home</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
