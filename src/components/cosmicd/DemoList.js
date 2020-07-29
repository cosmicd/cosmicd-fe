import React from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Cosmicd.css";

export default class DemoList extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div className="demos">
        <PageHeader> web-app demos </PageHeader>
        <ListGroup>
        <ListGroupItem href="/demos/web/notes-service" target="_blank">
            React, bootstrap, serverless notes-service
          </ListGroupItem>
          <ListGroupItem href="/demos/web/skyed" target="_blank">
            jquery, bootstrap browser app
          </ListGroupItem>
          <ListGroupItem href="/demos/web/react-pwa-mui" target="_blank">
            React, material-ui navbar
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
