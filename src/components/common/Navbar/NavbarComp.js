import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../../assests/logo.svg";
import "./../../../styles/Navbarcompcss.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
function Navbarcomp() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarwrapper sticky top-0 w-100 z-50"
    >
      <Container className="wrapper_inner">
        <div className="w-full flex justify-between">
          <Navbar.Brand data-to-scrollspy-id="first">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          {/* <div className="flex items-center me-1"><IoIosCall className="hover:text-orange-400 h-max text__24" /></div> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              data-to-scrollspy-id="first"
              href="#first"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              data-to-scrollspy-id="second"
              href="#second"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              data-to-scrollspy-id="third"
              href="#third"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              href="#link"
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              href="#link"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
