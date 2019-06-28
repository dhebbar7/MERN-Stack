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
      { id: uuid(), name: "Monitor" }
    ]
  };
  render() {
    const { items } = this.state;
    return (
      <div className="container" style={{ margin: "auto", padding: "50px" }}>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("enter item");
            if (name) {
              this.setState(state => ({
                items: [...this.state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <Button>&times;</Button>
                <ListGroupItem>{name}</ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    );
  }
}
export default ShoppingList;
