import Head from "next/head";
import Image from "next/image";
import MainLayout from "@/components/common/layouts/MainLayout";
import useFetchApiItems from "@/hooks/useFetchApiItems";

export default function Dashboard() {
  let user = null;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
  }

  const [restaurants, isresLoading, refetchres] = useFetchApiItems(
    `/restaurants?filters[users][documentId][$eqi]=${user?.documentId}`
  );

  const foundRestaurant = restaurants[0] ?? null;

  const handleCreateCategory = (res) => {
    if (res.documentId) {
      console.log("res", res);
      const values = {
        data: {
          name: "Burger",
          description: "Burger desc",
          internalName: "AbrorRes_Burger",
          restaurant: res.documentId, // res.documentId
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };
      fetch("http://192.168.100.84:1337/api/categories", options)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.error(error));
    }
  };

  const [categories, isLoading] = useFetchApiItems(
    `/categories?filters[restaurant][documentId][$eq]=${foundRestaurant?.documentId}`
  );

  const handleCreateType = (cats) => {
    const firstCat = cats[1] ?? null;
    if (firstCat) {
      const values = {
        data: {
          name: "Osh",
          category: firstCat.documentId, // res.documentId
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };
      fetch("http://192.168.100.84:1337/api/types", options)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <Head />
      <div>
        <button onClick={() => handleCreateCategory(foundRestaurant)}>Create Category</button>
        <button onClick={() => handleCreateType(categories)}>Create type</button>
        <Image src="/dashboard.png" width={1460} height={1544} alt="back" />
      </div>
    </>
  );
}

Dashboard.getLayout = (pageProps) => (
  <MainLayout>
    <Dashboard {...pageProps} />
  </MainLayout>
);
