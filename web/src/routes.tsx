import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {Terminal} from "./views/Terminal";

const Routes: React.FC = () => (
   <Switch>
      <Route path="/terminal" component={Terminal} />
      <Redirect exact from="/" to="dashboard" />
      {/* <Route component={() => <div>Not Found</div>} /> */}
   </Switch>
);

export default Routes;
