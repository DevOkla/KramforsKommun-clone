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
`;
export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Logo = styled.div`
  min-width: 20rem;
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
  text-align: center;
  font-weight: bold;

  padding: 2rem 1rem;
`;
export const Link = styled.a`
  cursor: pointer;
  background: #0098d3;
  transition: 0.3s;
  padding: 1rem 2rem;
  width: 16%;
  display: flex;
  align-items: center;
  &:hover {
    color: white;
    background: #054f6c;
    transition: 0.3s;
  }
`;
export default Nav;
