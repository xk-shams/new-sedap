import React, { useState } from "react";
import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function FoodsMap({ selected, data, refetch }) {
  const router = useRouter();
  const [dialogState, setDialogState] = useState({
    open: false,
    foodId: null,
  });

  const handleDelete = (foodId) => {
    if (foodId) {
      fetch(`http://192.168.100.108:1337/api/foods/${foodId}`, {
        method: "DELETE",
      })
        .then((res) => {
          console.log("delete:", res);
          if (res.ok) {
            setDialogState({
              open: false,
              foodId: null,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        ...(selected === "left" ? { flexWrap: "wrap" } : { flexDirection: "column" }),
        ...(selected === "left" ? { marginTop: "130px" } : { marginTop: "50px" }),
        gap: "20px",
      }}
    >
      {selected === "left"
        ? data.map((food) => (
            <div
              key={food.id}
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
                  overflow: "hidden",
                }}
              >
                <Image
                  width={200}
                  height={200}
                  src={food.image}
                  alt="test"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
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
                  {food.type?.category?.name} /{" "}
                  <span style={{ color: "#5E6C93" }}>{food.type?.name}</span>
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
                      onClick={() => router.push(`/foods/${food.documentId}`)}
                    />
                    <CustomBtnFood
                      onClick={() => router.push(`/foods/${food.documentId}/edit`)}
                      back="#FF5B5B26"
                      img="/foodIcon2.png"
                      text="Edit"
                    />
                    <CustomBtnFood
                      onClick={() =>
                        setDialogState({
                          open: true,
                          foodId: food.documentId,
                        })
                      }
                      back="#2D9CDB26"
                      img="/foodIcon3.png"
                      text="Delete"
                    />
                    <CustomBtnFood
                      onClick={() =>
                        router.push(`/foods/new?name=${food.name}&price=${food.price}`)
                      }
                      back="#5E6C9326"
                      img="/foodIcon4.png"
                      text="Duplicate"
                    />
                  </div>
                </p>
              </div>
            </div>
          ))
        : data.map((food) => (
            <div
              key={food.id}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "25px",
                backgroundColor: "white",
                borderRadius: "14px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    maxWidth: "350px",
                    minWidth: "350px",
                    maxHeight: "250px",
                    minHeight: "250px",
                    borderRadius: "14px",
                    backgroundColor: "#C4C4C4",
                    boxShadow: "11px 13px 17px 0px #00000026",
                  }}
                ></div>
                <div>
                  <h1
                    style={{
                      color: "#464255",
                      marginBottom: "10px",
                    }}
                  >
                    {food.name}
                  </h1>
                  <p
                    style={{
                      maxWidth: "450px",
                      width: "100%",
                      marginBottom: "25px",
                    }}
                  >
                    {food.comment}
                  </p>
                  <p
                    style={{
                      maxWidth: "450px",
                      width: "100%",
                      color: "green",
                      fontSize: "22px",
                    }}
                  >
                    {food.price} so'm
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <CustomBtnFood
                  back="#00B07426"
                  img="/foodIcon.png"
                  text="View"
                  onClick={() => router.push(`/foods/${food.documentId}`)}
                />
                <CustomBtnFood
                  onClick={() => router.push(`/foods/${food.documentId}/edit`)}
                  back="#FF5B5B26"
                  img="/foodIcon2.png"
                  text="Edit"
                />
                <CustomBtnFood
                  onClick={() =>
                    setDialogState({
                      open: true,
                      foodId: food.documentId,
                    })
                  }
                  back="#2D9CDB26"
                  img="/foodIcon3.png"
                  text="Delete"
                />
                <CustomBtnFood
                  onClick={() => router.push(`/foods/${food.documentId}/edit`)}
                  back="#5E6C9326"
                  img="/foodIcon4.png"
                  text="Duplicate"
                />
              </div>
            </div>
          ))}
      <Dialog
        open={dialogState.open}
        onClose={() => {
          setDialogState({
            open: false,
            foodId: null,
          });
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setDialogState({
                open: false,
                foodId: null,
              })
            }
          >
            Cancel
          </Button>
          <Button onClick={() => handleDelete(dialogState.foodId)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FoodsMap;
