import "./ItemListContainer.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddCartButton from "../AddCartButton/AddCartButton";

const ItemListContainer = ({ product }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia sx={{width: 345, height: 370}} component="img" className="imgItem" src={product.image}  alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category} | $ {product.price}
          </Typography>
          <AddCartButton className="botonAdd" />
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default ItemListContainer;