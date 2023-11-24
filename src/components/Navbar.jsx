import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar fixed="top" expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary" >
      <Container>
        <Link to= "/"> <Navbar.Brand>Birthday Reminder</Navbar.Brand>  </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/UpcomingBirthdays" className="nav-link">UpcomingBirthdays</Link>
            <Link to="/AddBirthday" className="nav-link">Add Birthday</Link>
            <Link to="/BirthdayList" className="nav-link">Birthday List</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;