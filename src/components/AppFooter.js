import React from "react";
import styled from "@emotion/styled";
import votePic from "./vote.png";

const Footer = styled.footer`
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding-bottom: 35px;
`;
const VotePic = styled.img`
  height: 100%;
`;
function AppFooter() {
  return (
    <Footer>
      <VotePic src={votePic} alt="vote" />
    </Footer>
  );
}
export default AppFooter;
