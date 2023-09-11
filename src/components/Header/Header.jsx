import "./Header.scss";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {

  return (
    <div className="header">
      <Navbar expand="lg">
        <Link to="/">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Solutions" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/MDU">MDU</NavDropdown.Item>
              <NavDropdown.Item href="/Hospitality">
                Hospitality
              </NavDropdown.Item>
              <NavDropdown.Item href="">Senior Living</NavDropdown.Item>
              <NavDropdown.Item href="">Student Housing</NavDropdown.Item>
              <NavDropdown.Item href="">Education</NavDropdown.Item>
              <NavDropdown.Item href="">SMB</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Education</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Media & Events" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/News">
                In the News
              </NavDropdown.Item>
              <NavDropdown.Item href="">Press Releases</NavDropdown.Item>
              <NavDropdown.Item href="">Events</NavDropdown.Item>
              <NavDropdown.Item href="">Videos</NavDropdown.Item>
              <NavDropdown.Item href="">Blog</NavDropdown.Item>
              <NavDropdown.Item href="">Collateral</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* portal login */}
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
