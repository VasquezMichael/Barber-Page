import React from "react";
import { Container } from "./style";
import logoImg from "../../../assets/Logo.png";
const LogoImg = () => {
  return (
    <Container>
      <img src={logoImg} alt="" className="img" />
    </Container>
  );
};

export default LogoImg;
