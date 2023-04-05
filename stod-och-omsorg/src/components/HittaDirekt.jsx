import React from "react";
import kontakt from "../assets/kontakt.jpg";
import fonder from "../assets/fonder.jpg";
import aldre from "../assets/aldre.jpg";
import tax from "../assets/tax.jpg";
import stod from "../assets/stod.jpg";
import uteplats from "../assets/uteplats.jpg";
import etjanster from "../assets/etjanster.jpg";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
const HittaDirekt = () => {
  return (
    <HittaDirektContainer>
      <H2>Hitta Direkt</H2>
      <Links>
        <Link>
          <Img src={aldre} alt="" />
          <Text>
            Äldre
            <IoIosArrowForward />
          </Text>
        </Link>
        <Link>
          <Img src={stod} alt="" />
          <Text>
            Ekonomiskt Bistånd
            <IoIosArrowForward />
          </Text>
        </Link>
        <Link>
          <Img src={uteplats} alt="" />
          <Text>
            Öppna Mötesplatser
            <IoIosArrowForward />
          </Text>
        </Link>
        <Link>
          <Img src={kontakt} alt="" />
          <Text>
            Kontaktperson
            <IoIosArrowForward />
          </Text>
        </Link>{" "}
        <Link>
          <Img src={fonder} alt="" />
          <Text>
            Bidrag och fonder
            <IoIosArrowForward />
          </Text>
        </Link>
        <Link>
          <Img src={tax} alt="" />
          <Text>
            Taxor och Avgift
            <IoIosArrowForward />
          </Text>
        </Link>
        <Link>
          <Img src={etjanster} alt="" />
          <Text>
            E-tjänster
            <IoIosArrowForward />
          </Text>
        </Link>
      </Links>
    </HittaDirektContainer>
  );
};
export const HittaDirektContainer = styled.div`
  margin: auto;
`;

export const H2 = styled.div`
  font-size: 2.3rem;
  margin: 2rem 0;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: row;
    margin: 1rem auto;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;
  }
  @media (max-width: 630px) {
    display: flex;
    flex-direction: row;

    width: 100%;
  }
`;

export const Link = styled.a`
  background: #fff;
  min-width: 10rem;
  height: auto;
  font-size: 1.4rem;
  text-align: center;
  max-width: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  justify-content: center;
  box-shadow: 0 0 1.3rem 0.3rem rgba(0, 0, 0, 0.19);

  transition: 0.3s;
  &:hover {
    background: #0ebd01;
    color: white;
    transition: 0.3s;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: row;

    min-width: 20rem;
    margin: 0.2rem;
    height: 5rem;
    gap: 0px;
  }
  @media (max-width: 630px) {
    min-width: 100%;
    height: 4rem;
  }
`;

export const Text = styled.div`
  display: flex;
  gap: 5px;
  min-height: 8rem;
  align-items: center;
  padding: 2rem 1rem;
  @media (max-width: 750px) {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  @media (max-width: 630px) {
    justify-content: flex-start;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  cursor: pointer;
`;
export default HittaDirekt;
