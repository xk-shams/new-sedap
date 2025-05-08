import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function ViewItemDialog({ open, onClose, items, selectedId }) {
  const item = items.find((i) => i.id === selectedId);

  if (!item) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent sx={{ display: "flex", gap: 3, width: "850px" }}>
        <Box sx={{ flex: 1 }}></Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
              {item.comment || "Izoh mavjud emas."}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
              {item.price} som
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, alignSelf: "flex-start" }}
          >
            Xarid qilish
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
