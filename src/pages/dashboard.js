import Head from "next/head";
import Image from "next/image";
import MainLayout from "@/components/common/layouts/MainLayout";

export default function Dashboard() {
  return (
    <>
      <Head />
      <div>
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
