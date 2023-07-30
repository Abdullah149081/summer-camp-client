import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";
import "./CheckoutForm.css";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const [singleClass, setSingleClass] = useState();

  useEffect(() => {
    axiosSecure.get(`/selected-class/${id}`).then((res) => {
      setSingleClass(res.data);
    });
  }, [id, axiosSecure]);

  if (!singleClass) {
    return <div>hd</div>;
  }
  console.log(singleClass);
  return (
    <div className="w-full">
      <div className="camp-container">
        <h2 className="text-4xl font-bold text-center ">The Payment GetWay</h2>
        <div className="mt-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm singleClass={singleClass} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
