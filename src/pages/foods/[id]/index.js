import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import PageTitle from "@/components/common/PageTitle";
import { foodData } from "@/data";
import FoodSearch from "@/components/pages/foods/FoodSearch";
import NewBtn from "@/components/pages/foods/NewBtn";
import { useRouter } from "next/router";
import FoodDetailComponent from "@/components/pages/foods/FoodDetailComponent";

export default function FoodDetail() {
  const [foods, setFoods] = useState(foodData);
  const [currentFood, setCurrentFood] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setCurrentFood(
        foods.find((item) => String(item.id) === String(router.query.id))
      );
    }
  }, [router.query.id]);

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/foods?populate=*", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setFoods(data.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // }, []);

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

        {currentFood ? (
          <FoodDetailComponent data={currentFood} />
        ) : (
          <p>Failed</p>
        )}
      </div>
    </>
  );
}

FoodDetail.getLayout = (pageProps) => (
  <MainLayout>
    <FoodDetail {...pageProps} />
  </MainLayout>
);
