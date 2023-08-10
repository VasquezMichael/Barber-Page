import styled from "styled-components";
import hero from "../../assets/hero.jpg";

export const Container = styled.div`
  display: flex;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center center;
  color: #fff;
  width: 100%;
  height: 100vh;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: Newsreader;
  color: #fdcd52;
  margin-top: 10px;
  transition: all ease 0.5s;
  @media screen and (min-width: 690px) {
    font-size: 4rem;
  }
`;

export const Button = styled.button`
  padding: 15px;
  width: 20px;
  height: 30px;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  font-family: Newsreader;
  transition: all ease 0.5s;

  :hover {
    color: #fdcd52;
  }
  @media screen and (min-width: 690px) {
    width: 200px;
    font-size: 1rem;
  }
`;
