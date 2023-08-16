import React from "react";
import { Container } from "./style";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Icons = () => {
  return (
    <Container>
      <div className="lineLeft"></div>
      <div className="container-icons">
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <AiFillFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/__michaelsteven/" target="_blank">
          <AiFillInstagram className="icon" />
        </a>
        <a href="https://wa.link/xacqvq" target="_blank">
          <AiOutlineWhatsApp className="icon" />
        </a>
      </div>
      <div className="lineRight"></div>
    </Container>
  );
};
