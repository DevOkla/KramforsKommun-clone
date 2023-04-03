import React from "react";
import styled from "styled-components";
import { FaRegMap } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { MdHearing } from "react-icons/md";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Links>
        <Link>
          <GrContactInfo /> Kontakt
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
`;
const Links = styled.ul`
  display: flex;
  width: 80%;
  align-items: center;
  margin: auto;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 0.8rem;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
export default Toolbar;
