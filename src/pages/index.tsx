import type { NextPageWithLayout } from "./types";
import type { ReactElement } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import LandingSection from "../components/LandingSection";
import WatchOnTvSection from "../components/WatchOnTvSection";
import DownloadAndWatchSection from "../components/DownloadAndWatchSection";
import WatchOnDeviceSection from "../components/WatchOnDeviceSection";
import KidsValueSection from "../components/KidsValueSection";
import FAQSection from "../components/FAQSection";
const Home: NextPageWithLayout = () => {
  return (
    <>
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
