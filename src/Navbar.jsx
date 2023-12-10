
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
return (
<Navbar
bg="dark"
variant="dark"
>
<Container>
<div>

<Link
to="/"
className="text-white ms-3 text-decoration-none text-justify-start"
>

Home
</Link>
<Link
to="/contact"
className="text-white ms-3 text-decoration-none"
>
Contacto
</Link>
    </div>

<Navbar.Brand> Happy Cake</Navbar.Brand>

</Container>
</Navbar>

);
};
export default Nav;