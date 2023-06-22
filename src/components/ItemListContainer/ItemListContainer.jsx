import "./ItemListContainer.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemListContainer = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" className="imgItem" src={producto.imagen}  alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.categoria} | {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

};

export default ItemListContainer;