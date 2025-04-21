import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import MainLayout from "@/components/common/layouts/MainLayout";
import FoodForm from "@/components/pages/foods/FoodForm";
import Head from "next/head";

export default function New() {
  return (
    <>
      <Head>
        <title>Create New Food</title>
      </Head>
      <div>
        <FoodForm title={"Create new food"} btnText={"Create new Food"} />
      </div>
    </>
  );
}

New.getLayout = (pageProps) => (
  <MainLayout>
    <New {...pageProps} />
  </MainLayout>
);
