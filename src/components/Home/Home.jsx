import React from "react";
import Banner from "../Banner/Banner";
// import State from "../State/State";
// import TrendingApps from "../TrendingApps/TrendingApps";
import useFetchApp from "../../Hooks/useFetchApps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const Home = () => {
  const { apps, loading, error } = useFetchApp();

  return (
    <>
      <Banner></Banner>
      <State></State>
      {loading ? (
        <Loader></Loader>
      ) : error || apps.length <= 0 ? (
        <Error></Error>
      ) : (
        <TrendingApps apps={apps}></TrendingApps>
      )}
    </>
  );
};

export default Home;
