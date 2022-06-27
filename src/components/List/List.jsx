import React, { useEffect } from "react";
import { ContactContext } from "../../App";
import ProductCard from "../Card/Card";

const List = ({ contacts }) => {
  const { getContacts, deleteContact } = React.useContext(ContactContext);
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
