import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import PageTitle from "@/components/common/PageTitle";
import { foodData } from "@/data";
import FoodsMap from "@/components/pages/foods/FoodsMap";
import FoodMapSkeleton from "@/components/pages/foods/FoodMapSkeleton";
import FoodSearch from "@/components/pages/foods/FoodSearch";
import FoodBtn from "@/components/pages/foods/FoodBtn";
import NewBtn from "@/components/pages/foods/NewBtn";
import useFetchApiItems from "@/hooks/useFetchApiItems";
import { CiGrid41, CiServer } from "react-icons/ci";

export default function Foods() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selected, setSelected] = useState("left");

  // useEffect(() => {
  //   if (foods && searchValue.length > 0) {
  //     const filtered = foods.filter((item) =>
  //       item.name.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     setFilteredFoods(filtered);
  //   }
  // }, [searchValue, foods]);
  // http://192.168.100.108
  // query

  // populate[type][populate][0]=category

  let user = null;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
  }

  const [restaurants, isresLoading, refetchres] = useFetchApiItems(
    `/restaurants?filters[users][documentId][$eqi]=${user?.documentId}`
  );

  const foundRestaurant = restaurants[0] ?? null;

  // POST category
  // {
  //   name: '',
  //   description: '',
  //   internalName: '',
  //   restaurant: foundRestaurant.documentId,
  // }

  console.log("foundRestaurant", foundRestaurant);

  const [foods, isLoading, refetch] = useFetchApiItems(
    `/foods?filters[restaurant][documentId][$eqi]=${foundRestaurant?.documentId}&populate[type][populate][0]=category`
  );

  useEffect(() => {
    refetch();
  }, [restaurants]);

  console.log("foods", foods);

  return (
    <>
      <Head>
        <title>Foods</title>
      </Head>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PageTitle title="Foods" subtitle="Here is your menus summary with graph view" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >
            <FoodSearch onChange={setSearchValue} />
            <FoodBtn selected={selected} onSelect={setSelected} />
            <NewBtn />
          </div>
        </div>

        {!isLoading && foundRestaurant ? (
          searchValue.length > 0 ? (
            filteredFoods.length > 0 ? (
              <FoodsMap data={filteredFoods} />
            ) : (
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                Food topilmadi!
              </h1>
            )
          ) : (
            <FoodsMap data={foods} refetch={refetch} selected={selected} />
          )
        ) : (
          <FoodMapSkeleton count={3} />
        )}
      </div>
    </>
  );
}

Foods.getLayout = (pageProps) => (
  <MainLayout>
    <Foods {...pageProps} />
  </MainLayout>
);
