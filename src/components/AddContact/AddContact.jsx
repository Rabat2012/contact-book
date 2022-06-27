import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../App";

const AddContact = () => {
  const { addContact } = React.useContext(ContactContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  function handleSave() {
    if (!name || !number || !email) {
      alert("Заполните все поля!");
    } else {
      let newContact = {
        name,
        number,
        email,
      };
      addContact(newContact);
      console.log(newContact);
      navigate("/");
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
      }}>
      <TextField
        value={name}
        label="Name"
        onChange={e => setName(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={number}
        label="Number"
        onChange={e => setNumber(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={email}
        label="E-mail"
        onChange={e => setEmail(e.target.value)}
        variant="outlined"
      />
      <Button onClick={() => handleSave()} sx={{ m: 1 }} variant="contained">
        Добавить
      </Button>
    </Box>
  );
};

export default AddContact;
