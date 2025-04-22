import { foodData } from "@/data";
import Box from "@mui/material/Box";
import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
import Variants from "@/components/pages/foods/Skeleton";
import { useRouter } from "next/router";
import React, { useEffect, useState, forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FoodsMap(props) {
  const { data } = props;
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState({
    isOpen: false,
    food: null,
  });

  const [isViewOpen, setIsViewOpen] = useState({
    isOpen: false,
    foodId: null,
  });

  const handleDelete = (foodId) => {
    console.log("delete food: ", foodId);
    // ochiriw logikasi

    setIsDialogOpen({
      isOpen: false,
      food: null,
    });
  };

  const handleViewOpen = () => {
    setIsViewOpen(true);
  };

  const handleViewClose = () => {
    setIsViewOpen({
      isOpen: false,
      foodId: null,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {data.map((food) => {
        return (
          <div
            style={{
              maxWidth: "276px",
              maxHeight: "360px",
              width: "360px",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "0px 30px 30px 30px",
              borderRadius: "14px",
              marginBottom: "70px",
            }}
            key={food.id}
          >
            <div
              style={{
                maxWidth: "194px",
                minWidth: "194px",
                maxHeight: "194px",
                minHeight: "194px",
                backgroundColor: "#C4C4C4",
                boxShadow: "11px 13px 17px 0px #00000026",
                borderRadius: "50%",
                marginBottom: "42px",
                marginTop: "-74px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  textAlign: "center",
                  maxWidth: "194px",
                  color: "#464255",
                  width: "100%",

                  marginBottom: "8px",
                }}
              >
                {food.name}
              </h2>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "center",
                  color: "#00B074",
                  marginBottom: "22px",
                }}
              >
                {food.category} /{" "}
                <span style={{ color: "#5E6C93" }}>{food.type}</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "22px",
                  }}
                >
                  <CustomBtnFood
                    back="#00B07426"
                    img="/foodIcon.png"
                    text="View"
                    onClick={() =>
                      setIsViewOpen({
                        isOpen: true,
                        foodId: food.id, // food.id ni saqlaymiz
                      })
                    }
                  />
                  <CustomBtnFood
                    onClick={() => router.push(`/foods/${food.id}/edit`)}
                    back="#FF5B5B26"
                    img="/foodIcon2.png"
                    text="Edit"
                  />
                  <CustomBtnFood
                    onClick={() =>
                      setIsDialogOpen({
                        isOpen: true,
                        food,
                      })
                    }
                    back="#2D9CDB26"
                    img="/foodIcon3.png"
                    text="Delete"
                  />
                  <CustomBtnFood
                    onClick={() => router.push(`/foods/${food.id}/edit`)}
                    back="#5E6C9326"
                    img="/foodIcon4.png"
                    text="Duplicate"
                  />
                </div>
              </p>
            </div>
          </div>
        );
      })}
      <Dialog
        open={isDialogOpen.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() =>
          setIsDialogOpen({
            isOpen: false,
            food: null,
          })
        }
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you really want to delete{" "}
            <strong>{isDialogOpen.food?.name ?? "-"}</strong> food?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setIsDialogOpen({
                isOpen: false,
                food: null,
              })
            }
          >
            Cancel
          </Button>
          <Button onClick={() => handleDelete(isDialogOpen.food.id)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isViewOpen.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleViewClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "850px",
            width: "100%",
            minHeight: "360px",
            padding: "25px",
            borderRadius: "32px",
          },
        }}
      >
        <DialogContent sx={{ display: "flex", gap: 3 }}>
          {(() => {
            const item = foodData.find((item) => item.id === isViewOpen.foodId);
            if (!item) return null;

            return (
              <>
                <div style={{ flex: 1 }}>
                  <img
                    src={item.image || "https://via.placeholder.com/300"}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "16px",
                      objectFit: "cover",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>

                {/* O‘ng taraf: Ma’lumotlar */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h2 style={{ margin: 0 }}>{item.name}</h2>
                    <p style={{ color: "#555", marginTop: "10px" }}>
                      {item.comment}
                    </p>
                    <h3 style={{ color: "#1976d2", marginTop: "15px" }}>
                      {item.price} so'm
                    </h3>
                  </div>
                  <Button variant="contained" color="primary">
                    Xarid qilish
                  </Button>
                </div>
              </>
            );
          })()}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleViewClose}
            sx={{
              position: "absolute",
              top: "15px",
              left: "8px",
              borderRadius: "50%",
              width: "50px",
              height: "63px",
              border: "1px solid grey",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FoodsMap;
