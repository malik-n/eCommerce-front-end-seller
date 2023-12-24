/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./query";

const Hero = () => {
  const { data } = useQuery(GET_PRODUCTS);
  console.log("data", data);

  return (
    <>
      <Typography variant="h3" component="h2">
        Seller Dashboard
      </Typography>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        marginTop="2rem"
        flexWrap={"wrap"}
      >
        {data?.getProducts?.map((product) => {
          console.log("product", product);
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {product.productName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {product.brand.brandName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita, ipsam sunt laboriosam at earum temporibus dolorum
                  voluptatem, quis corrupti iusto voluptate atque iure alias hic
                  quam. Incidunt explicabo quisquam accusantium.
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Price: ${parseFloat(product.price).toFixed(2)}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {product.category.categoryName}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default Hero;
