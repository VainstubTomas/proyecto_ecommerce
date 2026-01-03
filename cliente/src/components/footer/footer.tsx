import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
//TODO: agregar links para cerrar sesion
export default function FooterComponent() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="VainstubTomás™" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">Products</FooterLink>
        <FooterLink href="#">Cart</FooterLink>
        <FooterLink href="#">Log in</FooterLink>
        <FooterLink href="#">Sign in</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
