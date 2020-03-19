import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Add from "./components/Add";
import Result from "./components/Result";
import Vote from "./components/Vote";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <AppHeader />
        <Main>
          <Switch>
            <Route path="/vote/:pollId">
              <Vote />
            </Route>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
            <Route path="/">
              <Add />
            </Route>
          </Switch>
        </Main>
        <AppFooter />
      </Router>
    </>
  );
}

export default App;
