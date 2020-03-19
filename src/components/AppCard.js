import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function AppCard(props) {
  return <Card className="card">{props.children} </Card>;
}
export default AppCard;
