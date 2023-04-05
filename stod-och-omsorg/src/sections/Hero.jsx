import React from "react";

import styled from "styled-components";
import Nyheter from "./Nyheter.jsx";
import HittaDirekt from "../components/HittaDirekt.jsx";
import { BiDonateHeart } from "react-icons/bi";
import Linksmap from "../components/Linksmap.jsx";
const Hero = () => {
  //Toggle List Menu

  return (
    <HeroContainer>
      <Main>
        <H1>
          Stöd & Omsorg <BiDonateHeartEl />
        </H1>
        <P>
          Alla människor kan hamna i situationer då de kan behöva stöd och hjälp
          för att underlätta vardagen. Här hittar du information om vilket stöd
          Kramfors Kommun kan erbjuda dig, vart du kan vända dig och hur du gör
          för att ansöka om stöd.
        </P>
        <HittaDirekt />
        <Nyheter />
        <Linksmap />
      </Main>
    </HeroContainer>
  );
};
export const H1 = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  font-weight: bold;
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  @media (max-width: 650px) {
    font-size: 2.5rem;
    gap: 0.5rem;
  }
`;
export const P = styled.p`
  font-size: 1.4rem;
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 0 1rem;
  margin: auto;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Main = styled.div``;
export const BiDonateHeartEl = styled(BiDonateHeart)`
  color: red;
  font-size: 5rem;
`;

export default Hero;
