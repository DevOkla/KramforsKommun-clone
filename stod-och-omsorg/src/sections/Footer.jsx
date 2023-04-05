import React from "react";
import styled from "styled-components";
import KramforsLogo2 from "../assets/KramforsLogo2.svg";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutboundFill } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <Top>
        <Left>
          <H1>Kontaktuppgifter</H1>
          <Ul>
            <Li>
              <HiLocationMarker /> Kramfors kommun, 872 80 KRAMFORS
            </Li>
            <Li>
              {" "}
              <BsTelephoneOutboundFill />
              Telefon: 0612-800 00
            </Li>
            <Li>
              <AiOutlineMail />
              E-post: kommun@kramfors.se
            </Li>
            <Li>Organisationsnummer: 212000-2429</Li>
            <Li>Till personalportalen</Li>
          </Ul>
        </Left>
        <Mid>
          <H1>Genvägar</H1>
          <Ul>
            <Li>Personuppgifter & GDPR</Li>
            <Li>Press och kommunikation</Li>
            <Li>Hitta politiker</Li>
            <Li>Felanmälan</Li>
          </Ul>
        </Mid>
        <Right>
          <H1>Om webbplatsen</H1>
          <Ul>
            <Li>Om webbplatsen</Li>
            <Li>Tillgänglighetsredogörelse</Li>
            <Li>Om kakor</Li>
            <Li>Webbkarta</Li>
          </Ul>
        </Right>
      </Top>
      <Bottom>
        <Logo>
          <Img src={KramforsLogo2} alt="Kramfors Kommun Logo" />
        </Logo>
        <Socials>
          <h1>Följ oss på: </h1>
          <FiFacebook
            style={{
              color: "#004F71",
              background: "white",
              borderRadius: "0.4rem",
              border: "1px solid white",
              margin: "0 0.3rem",
              cursor: "pointer",
            }}
            size={40}
          />
          <FiInstagram
            style={{
              color: "#004F71",
              background: "white",
              borderRadius: "0.4rem",
              border: "1px solid white",
              margin: "0  0.3rem",
              cursor: "pointer",
            }}
            size={40}
          />

          <FiYoutube
            style={{
              color: "#004F71",
              background: "white",
              borderRadius: "0.4rem",
              border: "1px solid white",
              margin: "0  0.3rem",
              cursor: "pointer",
            }}
            size={40}
          />
          <FiLinkedin
            style={{
              color: "#004F71",
              background: "white",
              borderRadius: "0.4rem",
              border: "1px solid white",
              margin: "0  0.3rem",
              cursor: "pointer",
            }}
            size={40}
          />
        </Socials>
      </Bottom>
    </FooterContainer>
  );
};

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #004f71;
  padding: 2rem;
  color: white;
  line-height: 2rem;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 750px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const H1 = styled.h1`
  padding: 1rem 0;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 0 1rem;
`;
export const Mid = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 0 1rem;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const Bottom = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 750px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 10%;
  margin-top: 3rem;
  align-items: center;
  @media (max-width: 650px) {
    h1 {
      width: 100%;
    }
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
    width: 90%;
    margin: 2rem auto;
  }
`;
export const Ul = styled.div``;
export const Li = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const Logo = styled.div`
  width: 20rem;

  margin-top: 2rem;
`;
export const Img = styled.img`
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export default Footer;
