import React from "react";
import { Route, Switch } from "react-router-dom";
import { Cosmicd,DemoList} from "./components/cosmicd";
import NotFound from "./components/misc/NotFound";

export default props => (
  <Switch>
    <Route exact path= "/" render={props => <Cosmicd {...props} />} /> 
    <Route exact path= "/demolist" render={props => <DemoList {...props} />} />         
    <Route component={NotFound} />
  </Switch>
);

