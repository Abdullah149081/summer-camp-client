import React from "react";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Banner />
      <PopularInstructor />
    </div>
  );
};

export default Home;
