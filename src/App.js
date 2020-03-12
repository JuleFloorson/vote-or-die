import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
              <Route path="/Vote">
                <Vote />
              </Route>
              <Route path="/Result">
                <Result />
              </Route>
              <Route path="/">
                <Add />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
