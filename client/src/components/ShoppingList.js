import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Laptop" },
      { id: uuid(), name: "Mouse" },
      { id: uuid(), name: "Keyboard" },
      { id: uuid(), name: "Laptop" }
    ]
  };
  render() {
    return <div />;
  }
}
export default ShoppingList;
