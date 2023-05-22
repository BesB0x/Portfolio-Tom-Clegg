import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  const noNav = ['/']
  const location = useLocation()
  return (
    <>
      {!noNav.includes(location.pathname) &&
        <Navbar expand='md' >
          <Container>
            <Navbar.Brand to='/' as={Link}>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link to='/projects' className='projects-nav' as={Link}>Projects</Nav.Link>
                <Nav.Link to='/about' className='about-nav' as={Link}>About Me</Nav.Link>
                <Nav.Link to='/skills' className='skills-nav' as={Link}>Skills & Experience</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </>
  )
}

export default NavBar