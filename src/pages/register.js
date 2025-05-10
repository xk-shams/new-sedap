// pages/register.js
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AuthLayout from "../components/AuthLayout";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Parollar mos kelmadi");
      setLoading(false);
      return;
    }

    try {
      // API call simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Roʻyxatdan oʻtishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Ro'yxatdan o'tish">
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <PersonAddIcon />
      </Avatar>

      {error && (
        <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Ism"
              autoFocus
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Familiya"
              name="lastName"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Manzil"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Jins</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={formData.gender}
                label="Jins"
                onChange={handleChange}
              >
                <MenuItem value="male">Erkak</MenuItem>
                <MenuItem value="female">Ayol</MenuItem>
                <MenuItem value="other">Boshqa</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Parol"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Parolni tasdiqlang"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" passHref>
              <Button variant="text" size="small">
                Hisobingiz bormi? Kirish
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
