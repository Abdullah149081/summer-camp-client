import React from "react";

import PageTitle from "../../../components/pageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <Choose />
    </div>
  );
};

export default Home;
