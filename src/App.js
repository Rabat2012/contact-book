import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";

export const ContactContext = React.createContext();

const App = () => {
  const API = "http://localhost:8000/contacts";

  const [contacts, setContact] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function getContacts() {
    let res = await axios(API);
    setContact(res.data);
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    setOneContact(res.data);
  }

  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  // console.log(oneContact);
  return (
    <div>
      <ContactContext.Provider
        value={{
          getContacts,
          getOneContact,
          addContact,
          deleteContact,
          updateContact,
        }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <List
                  deleteContact={deleteContact}
                  contacts={contacts}
                  getContacts={getContacts}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact addContact={addContact} />}
            />
            <Route
              path="/edit/:id"
              element={
                <Edit
                  oneContact={oneContact}
                  getOneContact={getOneContact}
                  updateContact={updateContact}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ContactContext.Provider>
    </div>
  );
};

export default App;
