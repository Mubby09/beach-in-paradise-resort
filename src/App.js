import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Rooms from "../src/pages/Rooms";
import SingleRoomPage from "./pages/SinglePageRoom";
import Error from "./pages/Error";
import InquiryPage from "./pages/Inquiry";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/roomspage" component={Rooms} />
        <Route exact path="/roomspage/:slug" component={SingleRoomPage} />
        <Route exact path="/inquiry" component={InquiryPage} />
        <Route exact component={Error} />
      </Switch>
    </div>
  );
}

export default App;
