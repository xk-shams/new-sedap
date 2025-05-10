// pages/login.js
import { useState } from "react";
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthLayout from "../components/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Kirishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

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
            <Link href="/register" passHref>
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
