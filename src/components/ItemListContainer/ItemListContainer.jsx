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
    <Card sx={{ Width: 200, background: "#5c5c61", margin: 0}}>
      <CardActionArea className="action">
        <CardMedia sx={{borderRadius: 10,padding: 2, width: 270, height: 370, justifyContent: 'center'}} component="img" className="imgItem" src={product.image}  alt="" />
        <CardContent>
          <Typography sx={{color: "white"}} gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography sx={{color: "white"}} variant="p" color="text.secondary">
            {product.category} | $ {product.price}
          </Typography>
          <AddCartButton />
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default ItemListContainer;