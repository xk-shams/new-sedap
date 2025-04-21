import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function ViewItemDialog({ open, onClose, items, selectedId }) {
  const item = items.find((i) => i.id === selectedId);

  if (!item) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent sx={{ display: "flex", gap: 3, width: "850px" }}>
        {/* Chap taraf (Rasm) */}
        <Box sx={{ flex: 1 }}>
          <img
            src={item.image || "https://via.placeholder.com/300"}
            alt={item.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </Box>

        {/* O'ng taraf (Info) */}
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
              {item.price} so'm
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
