import React from "react";
import { foodData } from "@/data";
import Variants from "@/components/pages/foods/Skeleton";

function FoodMapSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {foodData.map((food) => {
        return <Variants key={food.id} />;
      })}
    </div>
  );
}

export default FoodMapSkeleton;
