// pages/login.js
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Alert,
  Box,
  Snackbar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthLayout from "../../components/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email");
    // const password = formData.get("password");

    // const response = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (response.ok) {
    // const res = await response.json();
    // const { user, jwt } = res.body;
    const user = {
      id: "1",
      userName: "Javohir",
    };
    localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("jwt", jwt);
    router.push("/dashboard");

    // } else {
    //   // Handle errors
    // }
  }

  return (
    <AuthLayout title="Tizimga kirish">
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>

      {error && (
        <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Manzil"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Parol"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Eslab qolish"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? "Kirilmoqda..." : "Kirish"}
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="/forgot-password" passHref>
              <Button variant="text" size="small">
                Parolni unutdingizmi?
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth/register" passHref>
              <Button variant="text" size="small">
                {"Hisobingiz yo'qmi? Ro'yxatdan o'tish"}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
