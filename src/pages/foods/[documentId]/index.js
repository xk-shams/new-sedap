import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import PageTitle from "@/components/common/PageTitle";
import FoodSearch from "@/components/pages/foods/FoodSearch";
import NewBtn from "@/components/pages/foods/NewBtn";
import { useRouter } from "next/router";
import FoodDetailComponent from "@/components/pages/foods/FoodDetailComponent";
import useFetchApiItems from "@/hooks/useFetchApiItems";

export default function FoodDetail() {
  const router = useRouter();
  const [food, isLoading] = useFetchApiItems(
    `/foods/${router.query.documentId}?populate[type][populate][0]=category`
  );

  return (
    <>
      <Head>
        <title>Food Detail</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PageTitle
            title="Foods"
            subtitle="Here is your menus summary with graph view"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >
            <FoodSearch />
            <NewBtn />
          </div>
        </div>

        {food ? <FoodDetailComponent data={food} /> : <p>Failed</p>}
      </div>
    </>
  );
}

FoodDetail.getLayout = (pageProps) => (
  <MainLayout>
    <FoodDetail {...pageProps} />
  </MainLayout>
);
