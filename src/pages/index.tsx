import HomeLayout from "../Layouts/HomeLayout";
import LandingSection from "../components/LandingSection";
import WatchOnTvSection from "../components/WatchOnTvSection";
import DownloadAndWatchSection from "../components/DownloadAndWatchSection";
import WatchOnDeviceSection from "../components/WatchOnDeviceSection";
import KidsValueSection from "../components/KidsValueSection";
import FAQSection from "../components/FAQSection";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Netflix - Shay Mesh</title>
      </Head>
      <LandingSection />
      <WatchOnTvSection />
      <DownloadAndWatchSection />
      <WatchOnDeviceSection />
      <KidsValueSection />
      <FAQSection />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
