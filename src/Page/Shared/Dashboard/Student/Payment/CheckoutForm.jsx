/* eslint-disable operator-linebreak */
/* eslint-disable no-useless-return */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const CheckoutForm = ({ singleClass }) => {
  const { classId, ClassName, price, photo, instructorEmail } = singleClass;

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [paymentSecret, setPaymentSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardSuccess, setCardSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (price && price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setPaymentSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({ type: "card", card });

    if (error) {
      setCardError(error?.message);
      setCardSuccess("");
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(paymentSecret, {
      payment_method: {
        card,
        billing_details: {
          email: user?.email || "unknown",
          name: user?.displayName || "anonymous",
        },
      },
    });

    setProcessing(false);

    if (confirmError) {
      setCardError(confirmError.message);
      setCardSuccess("");
    }

    if (paymentIntent.status === "succeeded") {
      setCardSuccess(paymentIntent.id);
      setCardError("");

      const paymentHistory = {
        classId,
        ClassName,
        photo,
        studentName: user?.displayName,
        studentEmail: user?.email,
        price,
        instructorEmail,
        transactionId: paymentIntent.id,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };

      const enrolledClass = {
        classId,
        ClassName,
        photo,
        instructorEmail,
        studentName: user?.displayName,
        studentEmail: user?.email,
        price,
      };
      axiosSecure.post("/payments", { paymentHistory, enrolledClass }).then((res) => {
        if (
          res.data.insertPaymentHistory.insertedId &&
          res.data.insertEnrolledClass.insertedId &&
          res.data.deleteSelectedClass.deletedCount === 1 &&
          res.data.updateSeats.modifiedCount > 0 &&
          res.data.updateInstructor.modifiedCount > 0
        ) {
          Swal.fire("Successful!", "Payment has been submitted.", "success");
          navigate("/dashboard/paymentHistory", { replace: true });
        }
      });
    }
  };
  return (
    <form className="w-2/3 m-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !paymentSecret || processing}>
        Pay
      </button>
      {cardError && <p className="text-error">{cardError}</p>}
      {cardSuccess && <p className="text-success">Transaction complete with transactionId: {cardSuccess}</p>}
    </form>
  );
};

export default CheckoutForm;
