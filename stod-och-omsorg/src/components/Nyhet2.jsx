import React from "react";
import styled from "styled-components";
import barn from "../assets/barn.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Nyhet2 = () => {
  return (
    <Nyhetscontainer>
      <Img src={barn} alt="hälsosamma aktiviter"></Img>
      <Title>Vill du bli kontaktperson eller kontaktfamilj?</Title>
      <Date> 31 mars 2023</Date>
      <Description>
        Att hjälpa andra kan vara det mest värdefulla vi gör. Vi söker därför
        dig som vill göra en insats...
      </Description>
    </Nyhetscontainer>
  );
};
export const Nyhetscontainer = styled.div`
  width: 40rem;
  cursor: pointer;
  box-shadow: 2px 10px 20px#8e8efe57;
  &:hover {
    color: #000000;
    background: #8e8efe57;
  }
  @media screen and (max-width: 700px) {
    width: 25rem;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;
export const Title = styled.h2`
  padding: 0.5rem 1rem;
`;
export const Date = styled.h3`
  color: gray;
  padding: 0 1rem;
`;
export const Description = styled.p`
  padding: 2rem 1rem;
`;
export default Nyhet2;
