import { Section } from "./style";
import { Icons } from "./Icons";
import LogoImg from "./LogoImg";
import Credits from "./Credits";
const Footer = () => {
  return (
    <>
      <Section>
        <LogoImg />
        <Icons />
        <p>vasquez.michael.steven@gmail.com</p>
        <p>© BarberShop, todos los derechos reservados</p>
      </Section>
      <Credits />
    </>
  );
};

export default Footer;
