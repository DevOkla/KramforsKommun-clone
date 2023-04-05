import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Nyhet from "../components/Nyhet";
import Nyhet2 from "../components/Nyhet2";
import Nyhet3 from "../components/Nyhet3";
import { IoIosArrowForward } from "react-icons/io";
const Nyheter = () => {
  return (
    <NyheterContainer>
      <H2>Senaste Nyheter</H2>
      <Splide
        options={{
          autoplay: true,
          type: "loop",
          interval: 5000,
          speed: 1500,
          autoWidth: true,
          margin: "auto",
          pagination: false,
          start: 1,
          perMove: 1,
          perPage: 1,
          breakpoints: {
            900: {
              perPage: 1,
            },
            700: {
              height: "33rem",
            },
          },
          pauseOnHover: true,
          focus: "center",
          height: "40rem",
          trimSpace: false,
          label: "Nyheter",
          drag: "free",
          gap: "2rem",
          arrows: true,
        }}
      >
        <SplideSlide>
          <Nyhet />
        </SplideSlide>
        <SplideSlide>
          <Nyhet2 />
        </SplideSlide>
        <SplideSlide>
          <Nyhet3 />
        </SplideSlide>
      </Splide>
      <Ladda>
        Visa Fler Nyheter <IoIosArrowForward />
      </Ladda>
    </NyheterContainer>
  );
};
export const H2 = styled.h2`
  margin: 4rem 0;
  font-size: 2.3rem;
  margin: 1rem 0;
`;
export const NyheterContainer = styled.div`
  margin: 2rem 0;
`;

export const Ladda = styled.button`
  margin: 2rem auto;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 1.3rem 0.3rem rgba(0, 0, 0, 0.19);
  border: none;
  padding: 0.8rem 2rem;
  transition: 0.3s;
  border-radius: 5rem;
  &:hover {
    color: #000000;
    background: #8e8efe57;
    outline: 1px solid white;
    transition: 0.3s;
  }
`;

export default Nyheter;
