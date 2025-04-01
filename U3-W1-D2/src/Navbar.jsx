import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#'>Epibook</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
            <Nav.Link href='#'>Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
