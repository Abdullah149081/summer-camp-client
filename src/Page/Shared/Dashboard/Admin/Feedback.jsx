import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Feedback = () => {
  const { register, handleSubmit, reset } = useForm();
  const id = useParams();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    axiosSecure
      .patch(`/class/feedback/${id.id}`, {
        feedback: data.feedback,
      })
      .then((item) => {
        if (item.data.modifiedCount) {
          Swal.fire({
            title: "success",
            text: "Feedback send   successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
          reset();
        }
      });
  };
  return (
    <div className="camp-container">
      <h2 className="text-4xl text-center font-bold mb-8">FeedBack Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">FeedBack</span>
          </label>
          <textarea {...register("feedback", { required: true })} className="textarea textarea-bordered h-24" placeholder="Type Feedback" />
        </div>
        <button type="submit" className="btn-camp mt-6">
          send feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
