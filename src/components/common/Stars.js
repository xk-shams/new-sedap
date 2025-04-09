import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating(props) {
  const { stars } = props;
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={stars}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
