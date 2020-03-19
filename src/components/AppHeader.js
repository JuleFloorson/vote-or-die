import React from "react";
import styled from "@emotion/styled";
import Logo from "./logo.png";

const Header = styled.header`
  background-color: #1898d6;
  height: 90px;

  text-align: end;
  border: white solid 2px;
  box-shadow: 3px 3px #3b3b3b26;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const HeaderLogo = styled.img`
  height: 70px;
  padding-left: 5px;
`;
const Heading = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 200;
  padding-right: 15px;
`;

function AppHeader() {
  return (
    <Header>
      <HeaderLogo src={Logo} alt="green haken" />
      <Heading>Votinator</Heading>
    </Header>
  );
}
export default AppHeader;
