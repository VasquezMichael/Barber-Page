import AboutUs from "./About";
import Carrousel from "./Carrousel";
import { Container } from "./style";
const AboutUsWithCarrousel = () => {
  return (
    <Container>
      <div className="contenedor"></div>
      <Carrousel />
      <AboutUs />
    </Container>
  );
};

export default AboutUsWithCarrousel;
