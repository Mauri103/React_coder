import "./ItemListContainer.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemListContainer = (props) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" className="imgItem" src={props.imagen}  alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.categoria} | {props.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemListContainer;