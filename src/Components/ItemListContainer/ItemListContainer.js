/** @format */

import React from "react";
import { Card, Image } from "semantic-ui-react";

const ItemListContainer = (props) => {
  return (
    <Card>
      <Image
        src='https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg'
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.city}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ItemListContainer;
