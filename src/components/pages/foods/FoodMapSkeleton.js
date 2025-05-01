import React from "react";
import { foodData } from "@/data";
import Variants from "@/components/pages/foods/Skeleton";
import useFetchApiItems from "@/hooks/useFetchApiItems";

function FoodMapSkeleton() {
  const [items, setIsLoading] = useFetchApiItems();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "130px",
      }}
    >
      {items.map((food) => {
        return <Variants key={food.id} />;
      })}
    </div>
  );
}

export default FoodMapSkeleton;
