import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import AppFooter from "./components/AppFooter";
import Add from "./components/Add";
import Result from "./components/Result";
import Vote from "./components/Vote";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <div>
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
          </div>
        </main>
        <AppFooter />
      </Router>
    </>
  );
}

export default App;
