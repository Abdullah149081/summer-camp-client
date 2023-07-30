import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: payment } = useQuery(["payment"], async () => {
    const res = await axiosSecure.get(`/payments-history/${user?.email}`);
    return res.data;
  });
  console.log(payment);
  return (
    <div>
      <h1>payment </h1>
    </div>
  );
};

export default PaymentHistory;
