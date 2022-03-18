import React from "react";

export function Item({item}) {
  return (
    <div>
      <span>Marca : {item.brand}</span> <br />
      <span>Items : {item.items}</span> <br />
      <span>Price : {item.price}</span> <br />
      <span>Product : {item.product}</span> <br />
      <span>Quantity : {item.quantity}</span> <br />
      <hr />
    </div>
  );
}
