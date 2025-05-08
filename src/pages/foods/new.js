import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import MainLayout from "@/components/common/layouts/MainLayout";
import FoodForm from "@/components/pages/foods/FoodForm";
import Head from "next/head";
import { useRouter } from "next/router";

export default function New() {
  const router = useRouter();
  const food = {
    name: router.query.name,
    image: router.query.image,
    type: router.query.type,
    price: router.query.price,
    comment: router.query.comment,
  };
  return (
    <>
      <Head>
        <title>Create New Food</title>
      </Head>
      <div>
        <FoodForm title={"Create new food"} food={food} btnText={"Create new Food"} />
      </div>
    </>
  );
}

New.getLayout = (pageProps) => (
  <MainLayout>
    <New {...pageProps} />
  </MainLayout>
);
