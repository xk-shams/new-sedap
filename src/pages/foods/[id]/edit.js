import React from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import Head from "next/head";
import { foodData } from "@/data";
import FoodForm from "@/components/pages/foods/FoodForm";
import { useRouter } from "next/router";

export default function FoodEdit() {
  const router = useRouter();
  const foundFood = foodData.find((item) => item.id === router.query.id);
  return (
    <>
      <Head>
        <title>Food Edit</title>
      </Head>
      <FoodForm title={"Edit food"} food={foundFood} btnText={"Edit Food"} />
    </>
  );
}

FoodEdit.getLayout = (pageProps) => (
  <MainLayout>
    <FoodEdit {...pageProps} />
  </MainLayout>
);
