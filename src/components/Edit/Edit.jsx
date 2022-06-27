import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../../App";
import Loader from "../Loader/Loader";

const Edit = ({ oneContact }) => {
  const { getOneContact, updateContact } = React.useContext(ContactContext);
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  function handleSave() {
    let editedContact = {
      name,
      number,
      email,
    };
    updateContact(params.id, editedContact);
    navigate("/");
    console.log(editedContact);
  }
  useEffect(() => {
    getOneContact(params.id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setNumber(oneContact.number);
      setEmail(oneContact.email);
    }
  }, [oneContact]);

  return (
    <Container>
      {oneContact ? (
        <>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <TextField
              value={name}
              onChange={e => setName(e.target.value)}
              label="Name"
              variant="filled"
            />
            <TextField
              value={number}
              onChange={e => setNumber(e.target.value)}
              label="Number"
              variant="filled"
            />
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              label="Email"
              variant="filled"
            />
            <Button onClick={() => handleSave()} variant="outlined">
              Сохранить
            </Button>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Edit;
