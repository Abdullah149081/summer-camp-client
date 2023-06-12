import React from "react";
import useClass from "../../../../Hooks/useClass";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const MySelectedClasses = () => {
  const [join, refatch] = useClass();
  console.log(join);
  return (
    <div>
      <PageTitle title="Dashboard-MySelectedClasses" />
      <h1>hi</h1>
    </div>
  );
};

export default MySelectedClasses;
