import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useFetchApiItems from "@/hooks/useFetchApiItems";

const foodInitialValues = {
  name: "",
  category: "",
  type: "",
  price: "",
  comment: "",
};

function FoodForm({ title, food, btnText }) {
  const [formData, setFormData] = useState(foodInitialValues);
  const [category, setCategory] = useState("");

  const [categories, isLoading] = useFetchApiItems("/categories?populate=*");

  useEffect(() => {
    if (food) {
      setFormData({
        name: food.name || "",
        type: food.type || "",
        price: food.price || "",
        comment: food.comment || "",
        category: food.category?.id || "",
      });
      setCategory(food.category?.id || "");
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    setFormData({
      ...formData,
      category: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      data: {
        name: formData.name,
        type: formData.type,
        price: parseFloat(formData.price),
        comment: formData.comment,
        category: {
          connect: [category],
        },
      },
    };

    const options = {
      method: "POST", // "PUT" if updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch("http://localhost:1337/api/foods", options)
      .then((res) => res.json())
      .then((data) => console.log("Submitted:", data))
      .catch((err) => console.error("Submit Error:", err));
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        margin: "auto",
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: "30px",
      }}
    >
      <h1 style={{ color: "#00B074", marginBottom: "30px" }}>{title}</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Type"
              variant="outlined"
              name="type"
              value={formData.type}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              sx={textFieldStyle}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Comment"
              variant="outlined"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              multiline
              rows={4}
              sx={textFieldStyle}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#00B074",
                "&:hover": {
                  backgroundColor: "#009d60",
                },
                padding: "14px",
                fontSize: "16px",
              }}
            >
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default FoodForm;

const textFieldStyle = {
  "& .MuiInputLabel-root": {
    color: "#00B074",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00B074",
    },
    "&:hover fieldset": {
      borderColor: "#00B074",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00B074",
    },
  },
};
