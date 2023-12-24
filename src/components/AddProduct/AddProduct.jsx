import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "./mutation";
import { Form } from "react-router-dom";
import { brands, categories } from "./utils";
import { FormControl, InputLabel, Typography } from "@mui/material";

function AddProduct() {
  const navigate = useNavigate();
  // States
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // OnChange Functions
  const handleProductName = (e) => {
    console.log("product name", productName);
    setProductName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleBrandName = (event) => {
    console.log("brand input value", event);
    setBrandName(event.target.value);
  };

  const handleCategoryName = (e) => {
    console.log("category name", productName);
    setCategoryName(e.target.value);
  };

  // Mutation
  const [addproduct, { data, loading, error }] = useMutation(ADD_PRODUCT);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  console.log("data", data);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("states", brandName, categoryName);
        await addproduct({
          variables: {
            brandName,
            categoryName,
            description,
            price,
            productName,
          },
        });
        return navigate("/");
      }}
    >
      <Typography variant="h3" component="h2">
        Add Product
      </Typography>
      {/* Product name */}
      <FormControl>
        <TextField
          id="filled"
          label="Enter Product Name"
          variant="filled"
          value={productName}
          onChange={handleProductName}
          size="small"
        />
        {/* Description */}
        <TextField
          id="filled-multiline-flexible full-width"
          label="Enter Description"
          multiline
          maxRows={4}
          variant="filled"
          value={description}
          onChange={handleDescription}
        />
        {/* Price */}
        <TextField
          id="outlined-number"
          placeholder="Enter Price"
          type="number"
          value={price}
          onChange={handlePrice}
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>
        {/* Brands */}
        <InputLabel id="brand-name-select-label"></InputLabel>
        <Select
          labelId="brand-name-select-label"
          id="brand-name-select"
          maxRows={4}
          value={brandName}
          placeholder="Brand Name"
          onChange={handleBrandName}
        >
          {brands.map((name) => (
            <MenuItem value={name}>{name}</MenuItem>
          ))}
        </Select>
        {/* Categories */}
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          maxRows={4}
          value={categoryName}
          onChange={handleCategoryName}
        >
          {categories.map((category) => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
        <Button variant="outlined" label="Add Product" type="submit">
          Add Product
        </Button>
      </FormControl>
    </Form>
  );
}

export default AddProduct;
