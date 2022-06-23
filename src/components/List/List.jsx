import React, { useEffect } from "react";
import ProductCard from "../Card/Card";

const List = ({ getContacts, contacts, deleteContact }) => {
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {contacts.map(item => (
        <ProductCard key={item.id} item={item} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default List;
