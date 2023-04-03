import React from "react";

import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  //Toggle List Menu

  return (
    <HeroContainer>
      <Left>
        <LinksList>
          <Li> Stöd & omsorg </Li>

          <Li>Nyheter</Li>
          <Li>Akut hjälp</Li>

          <Li>Anhörigstöd, avlösning</Li>
          <Li>Barn, ungdom, familj och vuxen – Ge stöd</Li>

          <Li>Barn, ungdom och familj</Li>

          <Li>Beroende och missbruk</Li>

          <Li>Bidrag och fonder</Li>
          <Li>Dödsfall och begravning</Li>

          <Li>Ekonomiskt bistånd och rådgivning</Li>

          <Li>Funktionsnedsättning</Li>

          <Li>Färdtjänst</Li>

          <Li>God och nära vård</Li>

          <Li>God man, förvaltare och förmyndare</Li>
          <Li>Hjälpmedel och bostadsanpassning</Li>

          <Li>Hälso- och sjukvård</Li>

          <Li>Hot och våld</Li>

          <Li>Konsumentvägledning</Li>
          <Li>Kvalitet, statistik, jämförelser</Li>
          <Li>Ny i Sverige</Li>

          <Li>Psykiatrisk funktionsnedsättning</Li>

          <Li>Taxor och avgifter inom stöd och omsorg</Li>

          <Li>Välfärdsteknik och digitala stöd</Li>
          <Li>Äldre</Li>
        </LinksList>
      </Left>
      <Right>
        <H1> Stöd & Omsorg </H1>
        <P>
          Alla människor kan hamna i situationer då de kan behöva stöd och hjälp
          för att underlätta vardagen. Här hittar du information om vilket stöd
          Jönköpings kommun kan erbjuda dig, vart du kan vända dig och hur du
          gör för att ansöka om stöd.
        </P>
        <HittaDirekt>
          <H2>Hitta Direkt</H2>
          <Links>
            <Link>
              E-tjänster <IoIosArrowForward />
            </Link>
            <Link>
              Bidrag och fonder <IoIosArrowForward />
            </Link>
            <Link>
              Taxor och Fonder <IoIosArrowForward />
            </Link>
            <Link>
              Äldre <IoIosArrowForward />
            </Link>
          </Links>
        </HittaDirekt>
      </Right>
    </HeroContainer>
  );
};

export const HeroContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;
export const Left = styled.div`
  margin: 6.25rem 0rem 5rem 0rem !important;
  flex: 1;
`;
export const LinksList = styled.ul`
  padding: 0 1rem;
`;
export const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  min-width: 20rem;
`;
export const Right = styled.div``;
export const HittaDirekt = styled.div``;
export const H1 = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
`;
export const H2 = styled.div`
  font-size: 2.3rem;
  margin: 1rem 0;
`;
export const P = styled.p`
  font-size: 1.4rem;
`;
export const Links = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Link = styled.a`
  background: #fff;
  min-width: 10rem;
  height: 1rem;
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  justify-content: center;
  box-shadow: 0 0 1.3rem 0.3rem rgba(0, 0, 0, 0.12);
  height: 5rem;
`;

export default Hero;
