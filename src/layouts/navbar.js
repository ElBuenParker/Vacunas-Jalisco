import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link, useNavigate } from "react-router-dom"

import "./navbar.css"

const NavBarExample = () => {
    const navigate = useNavigate();

    const navigateToMain = async () => {
        navigate("/Home/")
    }
    const navigateToCalculadora = async () => {
        navigate("/calculadora/")
    }
    const navigateToPriv = async () => {
        navigate("/privacidad/")
    }
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <button onClick={navigateToMain} class="jalisco"> </button>
            <button onClick={navigateToMain} class="logo_jalisco"> </button>
              
                <button onClick={navigateToCalculadora} class="calculadora"> Calculadora</button>
                <button onClick={navigateToPriv} class="info"> </button>
                <button onClick={navigateToPriv} class="priv">Aviso de privacidad </button>
                


            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample