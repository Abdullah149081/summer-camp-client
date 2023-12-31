import React from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.seats = parseFloat(data.seats);
    data.status = "pending";
    data.picture = user.photoURL;

    axiosSecure.post("/class", data).then((item) => {
      if (item.data.insertedId) {
        Swal.fire({
          title: "success",
          text: "Class added Please wait ",
          icon: "success",
          confirmButtonText: "Cool",
        });
        reset();
      }
    });
  };

  return (
    <div>
      <div className="w-full">
        <PageTitle title="Add Item" />
        <div className="camp-container">
          <div>
            <div className="bg-slate-500 text-white rounded-lg border p-4 lg:p-14  ">
              <h1 className="text-4xl text-center font-bold capitalize mb-10">add a class</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text font-semibold text-base text-white">
                        Class name <span className="text-pink-500">*</span>
                      </span>
                    </label>
                    <select {...register("ClassName", { required: true })} className="select select-bordered text-black">
                      <option className="capitalize">Tennis</option>
                      <option className="capitalize">Football</option>
                      <option className="capitalize">Cricket</option>
                      <option className="capitalize">Frisbee</option>
                      <option className="capitalize">Volleyball</option>
                      <option className="capitalize">Rugby</option>
                    </select>
                  </div>
                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-semibold text-base text-white">
                        Class Image <span className="text-pink-500">*</span>
                      </span>
                    </label>
                    <input {...register("photo", { required: true })} type="url" placeholder="Sport picture" className="input input-bordered w-full text-black" />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text font-semibold text-base text-white">Instructor name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" value={user.displayName} className="input input-bordered w-full text-black" />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text font-semibold text-base text-white">Instructor email </span>
                    </label>
                    <input {...register("email", { required: true })} type="email" value={user.email} className="input input-bordered w-full text-black " />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold text-base text-white">
                        Price <span className="text-pink-500">*</span>
                      </span>
                    </label>
                    <input {...register("price", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full text-black " />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold text-base text-white">
                        Available seats <span className="text-pink-500">*</span>
                      </span>
                    </label>
                    <input {...register("seats", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full text-black  " />
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="btn-camp">
                    Add class
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
