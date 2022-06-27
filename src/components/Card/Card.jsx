import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ContactContext } from "../../App";

export default function ContactCard({ item }) {
  const { deleteContact } = React.useContext(ContactContext);
  return (
    <Card sx={{ maxWidth: 1200, margin: 5, display: "flex", flexWrap: "wrap" }}>
      <CardContent sx={{ margin: 3, display: "flex", flexWrap: "wrap" }}>
        <Typography
          sx={{ margin: 3 }}
          gutterBottom
          variant="h5"
          component="div">
          {item.name}
        </Typography>
        <Typography
          sx={{ margin: 3 }}
          gutterBottom
          variant="h5"
          color="text.secondary">
          {item.number}
        </Typography>
        <Typography
          sx={{ margin: 3 }}
          gutterBottom
          variant="h5"
          component="div">
          {item.email}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 7, marginBottom: 6 }}>
        <Button onClick={() => deleteContact(item.id)} size="small">
          Удалить
        </Button>
        <Link to={`/edit/${item.id}`}>
          <Button size="small">Изменить</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
