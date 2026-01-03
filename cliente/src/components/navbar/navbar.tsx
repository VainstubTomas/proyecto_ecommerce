import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import ProjectIcon from "/favicon.png"
//TODO: agregar links para cerrar sesion
export default function NavBar() {
  return (
    <Navbar fluid rounded className="fixed flex flex-row">
      <NavbarBrand>
        <img src={ProjectIcon} className="mr-3 h-6 sm:h-9" alt="project icon" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">
          Products
        </NavbarLink>
        <NavbarLink href="#">Cart</NavbarLink>
        <NavbarLink href="#">Log in</NavbarLink>
        <NavbarLink href="#">Sign in</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
