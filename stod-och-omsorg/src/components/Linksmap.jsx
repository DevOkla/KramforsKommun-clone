import React from "react";
import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";
const LinksMap = () => {
  return (
    <LinksMapContainer>
      <LinksList>
        <Li>
          <IoIosArrowForward /> Stöd & omsorg{" "}
        </Li>

        <Li>
          <IoIosArrowForward />
          Nyheter
        </Li>
        <Li>
          <IoIosArrowForward />
          Akut hjälp
        </Li>

        <Li>
          <IoIosArrowForward />
          Anhörigstöd, avlösning
        </Li>
        <Li>
          <IoIosArrowForward />
          Barn, ungdom, familj och vuxen – Ge stöd
        </Li>

        <Li>
          <IoIosArrowForward />
          Barn, ungdom och familj
        </Li>

        <Li>
          <IoIosArrowForward />
          Beroende och missbruk
        </Li>

        <Li>
          <IoIosArrowForward />
          Bidrag och fonder
        </Li>
        <Li>
          <IoIosArrowForward />
          Dödsfall och begravning
        </Li>

        <Li>
          <IoIosArrowForward />
          Ekonomiskt bistånd och rådgivning
        </Li>

        <Li>
          <IoIosArrowForward />
          Funktionsnedsättning
        </Li>

        <Li>
          <IoIosArrowForward />
          Färdtjänst
        </Li>

        <Li>
          <IoIosArrowForward />
          God och nära vård
        </Li>

        <Li>
          <IoIosArrowForward />
          God man, förvaltare och förmyndare
        </Li>
        <Li>
          <IoIosArrowForward />
          Hjälpmedel och bostadsanpassning
        </Li>

        <Li>
          <IoIosArrowForward />
          Hälso- och sjukvård
        </Li>

        <Li>
          <IoIosArrowForward />
          Hot och våld
        </Li>

        <Li>
          <IoIosArrowForward />
          Konsumentvägledning
        </Li>
        <Li>
          <IoIosArrowForward />
          Kvalitet, statistik, jämförelser
        </Li>
        <Li>
          <IoIosArrowForward />
          Ny i Sverige
        </Li>

        <Li>
          <IoIosArrowForward />
          Psykiatrisk funktionsnedsättning
        </Li>

        <Li>
          <IoIosArrowForward />
          Taxor och avgifter inom stöd och omsorg
        </Li>

        <Li>
          <IoIosArrowForward />
          Välfärdsteknik och digitala stöd
        </Li>
        <Li>
          <IoIosArrowForward />
          Äldre
        </Li>
      </LinksList>
    </LinksMapContainer>
  );
};
export const LinksMapContainer = styled.div`
  margin: 6.25rem 0rem 5rem 0rem !important;
  flex: 1;
`;
export const LinksList = styled.ul`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2%;
  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 1.4rem;
  width: 48%;
  gap: 5px;
  margin: 1rem 0;
  padding: 1rem 1rem;

  text-align: left;
  background: #cee2b9;
  color: #000;
  border: 0.1rem solid #939393;
  border-radius: 3.2rem;
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background: lightblue;
  }
  @media (max-width: 750px) {
    width: 100%;
    display: flex;
  }
`;
export default LinksMap;
