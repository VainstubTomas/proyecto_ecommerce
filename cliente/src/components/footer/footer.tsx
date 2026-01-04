import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
//TODO: agregar links para cerrar sesion
export default function FooterComponent() {
  return (
    <Footer
    container
    theme={{
      root: {
          base: "bg-gray-100 dark:bg-gray-800 shadow-[0_-4px_6px_-1px_rgba(59,130,246,0.5)]"
      }
    }}>
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
