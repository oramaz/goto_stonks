import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";

const App: React.FC = () => {

   return (
      <BrowserRouter>
         <Routes />
      </BrowserRouter>
   );
};

export default App;
