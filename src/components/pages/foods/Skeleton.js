import * as React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

export default function Variants() {
  return (
    <div
      style={{
        maxWidth: "276px",
        maxHeight: "360px",
        minHeight: "360px",
        width: "360px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "0px 30px 30px 30px",
        borderRadius: "14px",
      }}
    >
      <div
        style={{
          maxWidth: "194px",
          minWidth: "194px",
          maxHeight: "194px",
          minHeight: "194px",
          marginBottom: "42px",
          marginTop: "-74px",
        }}
      >
        <Skeleton
          variant="circular"
          width={194}
          height={194}
          sx={{ boxShadow: "11px 13px 17px 0px #00000026" }}
        />
      </div>

      <div style={{ width: "100%", textAlign: "center" }}>
        <Skeleton
          variant="text"
          width={194}
          height={28}
          style={{ margin: "0 auto 8px auto" }}
        />
        <Skeleton
          variant="text"
          width={160}
          height={28}
          style={{ margin: "-10px auto 10px auto" }}
        />

        <Skeleton
          variant="text"
          width={100}
          height={20}
          style={{ margin: "0 auto 22px auto" }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Skeleton
              sx={{ borderRadius: "12px", marginBottom: "7px" }}
              variant="rounded"
              width={36}
              height={36}
            />
            <Skeleton variant="text" width={32} height={14} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Skeleton
              sx={{ borderRadius: "12px", marginBottom: "7px" }}
              variant="rounded"
              width={36}
              height={36}
            />
            <Skeleton variant="text" width={32} height={14} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Skeleton
              sx={{ borderRadius: "12px", marginBottom: "7px" }}
              variant="rounded"
              width={36}
              height={36}
            />
            <Skeleton variant="text" width={32} height={14} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Skeleton
              sx={{ borderRadius: "12px", marginBottom: "7px" }}
              variant="rounded"
              width={36}
              height={36}
            />
            <Skeleton variant="text" width={32} height={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
