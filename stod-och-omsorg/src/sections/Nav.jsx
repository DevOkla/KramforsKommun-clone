import React from "react";
import styled from "styled-components";
import KramforsLogo from "../assets/KramforsLogo.svg";
import { FcSearch } from "react-icons/fc";
const Nav = () => {
  return (
    <NavContainer>
      <Top>
        <Logo>
          <Img src={KramforsLogo} alt="Kramfors Kommun Logo" />
        </Logo>
        <Search>
          <InputContainer>
            <Input type="text" name="" id="" placeholder="Ange Sökord " />
            <Button></Button>
          </InputContainer>
        </Search>
      </Top>
      <NavBarContainer>
        <Links>
          <Link>Barn & Utbuildning</Link>
          <Link>Stöd & Omsorg</Link>
          <Link>Se & Göra</Link>
          <Link>Bygga, Bo & Miljö</Link>
          <Link>Näringsliv & Arbete</Link>
          <Link>Kommun & Demokrati</Link>
        </Links>
      </NavBarContainer>
    </NavContainer>
  );
};

export const NavContainer = styled.div`
  margin: auto;
  width: 80%;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const Logo = styled.div`
  min-width: 20rem;
  margin: 1rem 0;
`;
export const Img = styled.img`
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const Search = styled.div`
  display: flex;
  margin: 2rem 4rem;
  @media (max-width: 1150px) {
    align-self: flex-end;
  }
  @media (max-width: 650px) {
    margin: 2rem 0;

    align-self: flex-start;
    justify-self: flex-start;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Input = styled.input`
  display: flex;
  min-width: 25rem;
  margin-left: 2rem;
  font-size: 1.4rem;
  padding: 0 0.3rem;
  height: 2.5rem;
  border-radius: 3px;
  border: 1px solid gray;
  position: relative;
`;
export const Button = styled(FcSearch)`
  display: flex;
  min-width: 2rem;
  position: absolute;
  right: 0;
  font-size: 1.4rem;
  margin: 0 0.3rem;
  height: 2rem;
  cursor: pointer;
`;
export const NavBarContainer = styled.div``;
export const Links = styled.div`
  display: flex;
  font-size: 1.6rem;

  font-weight: bold;
  @media (max-width: 1150px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1150px) {
    font-size: 1.4rem;
    flex-wrap: wrap;
  }
`;
export const Link = styled.a`
  cursor: pointer;
  background: #004f71;
  color: white;
  transition: 0.3s;
  padding: 1rem 0.5rem;
  min-width: 16%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  &:hover {
    background: #add8e6;
    transition: 0.3s;
    color: black;
  }
  @media (max-width: 1150px) {
    margin: 1rem;
    min-width: 45%;
    padding: 1rem 1rem;
  }
  @media (max-width: 630px) {
    min-width: 100%;
    height: 4rem;
    margin: 0.5rem;
  }
`;
export default Nav;
