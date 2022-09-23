import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home } exact path="/Home" />
           <Route exact path="/Cadastro" />
           <Route exact="/Login" />
       </BrowserRouter>
   )
}

export default Routes;