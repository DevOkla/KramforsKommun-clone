import React from "react";
import styled from "styled-components";
import { FaRegMap } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { MdHearing } from "react-icons/md";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Links>
        <Link>
          <BsTelephoneOutboundFill /> Kontakt
        </Link>
        <Link>
          <GoBook /> Lättläst
        </Link>
        <Link>
          <FaRegMap /> Karta
        </Link>
        <Link>
          <HiOutlineGlobeEuropeAfrica /> Other Languages
        </Link>
        <Link>
          <MdHearing /> Lyssna
        </Link>
      </Links>
    </ToolbarContainer>
  );
};
/*Styling componenets*/
const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  background: lightblue;
  height: 2.3rem;
  @media (max-width: 1300px) {
    font-size: 100%;
    height: 2.9rem;
  }
  @media (max-width: 900px) {
    font-size: 1.2rem;

    height: 2.9rem;
  }
  @media (max-width: 750px) {
    font-size: 1.2rem;

    height: 10vh;
    flex-wrap: wrap;
  }
`;
const Links = styled.ul`
  display: flex;
  width: 80%;
  align-items: center;
  margin: auto;
  justify-content: flex-end;
  gap: 2rem;
  @media (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
export default Toolbar;
