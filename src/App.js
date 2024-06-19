import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import PDFViewer from "./components/AboutMe/PDFViewer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div id="myPageContainer" className="container-fluid pagecontainer">
        <TopNav />
        <div id="myMainRow" className="row mainrow">
          <SideNav />
          <div id="myMainContent" className="col text-wrap maincontent">
          <Switch>              
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/aboutme">
                <AboutMe />
              </Route>
              <Route path="/contactme">
                <ContactMe />
              </Route>
              <Route path="/pdfviewer">                
                <PDFViewer />
              </Route>
              <Route path="/">                
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;