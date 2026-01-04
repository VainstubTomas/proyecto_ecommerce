import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle , Button} from "flowbite-react";
import ProjectIcon from "/favicon.png"
//TODO: agregar links para cerrar sesion
export default function NavBar() {
  return (
    <Navbar
    fluid
    rounded
    className="fixed top-0 left-0 right-0 w-full z-50"
    theme={{
      collapse: {
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium md:items-center"
      },
      link: {
        base: "hover:text-blue-600 rounded px-3 py-2"
      }
    }}
    >
      <NavbarBrand>
        <img src={ProjectIcon} className="mr-3 h-6 sm:h-9" alt="project icon" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#">
          Home
        </NavbarLink>
        <NavbarLink href="#">
          Products
        </NavbarLink>
        <NavbarLink href="#">Cart</NavbarLink>
        <NavbarLink href="#">Log in</NavbarLink>
        <Button color='blue' size="xs" href="#">
          Sign in
        </Button>
      </NavbarCollapse>
    </Navbar>
  );
}
