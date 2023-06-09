/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import PageTitle from "../../../components/pageTitle/PageTitle";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    signIn(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err?.message);
      });
    console.log(data);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <PageTitle title="Sign In" />
      <div>
        <div>
          <div className="hero min-h-screen ">
            <img
              className="border-2 rounded-lg shadow-2xl max-w-screen-xl absolute w-full h-[800px]"
              src="https://png.pngtree.com/thumb_back/fh260/background/20210929/pngtree-abstract-background-glassmorphism-pastel-color-image_908574.png"
              alt=""
            />
            <div className="hero-content w-full  flex-col lg:flex-row">
              <div className="card flex-shrink-0 w-full max-w-sm  ">
                <h2 className="text-center text-3xl font-bold">Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="px-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered " {...register("email", { required: true })} />
                    {errors?.email && <span className="mt-1 text-sm text-error font-bold">Email is required</span>}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold"> Password</span>
                    </label>
                    <div className="flex items-center ">
                      <input type={showPassword ? "text" : "password"} placeholder="Password" className="input relative w-full input-bordered " {...register("password", { required: true })} />
                      <button onClick={handleShowPassword} className="absolute right-9" type="button">
                        {showPassword ? <FaEyeSlash className="w-6 h-6" /> : <FaEye className="w-6 h-6 " />}
                      </button>
                    </div>
                    {errors?.password && <span className="mt-1 text-sm text-error font-bold"> Password is required</span>}
                  </div>

                  {error && <span className="text-error font-bold text-sm">{error}</span>}

                  <div className="form-control mt-6">
                    <button type="submit" className="btn border-0 font-bold">
                      Sign In
                    </button>
                  </div>
                </form>
                <p className="mt-2 text-center  font-bold">
                  Don't have an account?
                  <Link className=" text-base font-semibold link-hover ml-2" to="/signUp">
                    Sign up
                  </Link>
                </p>
                {/* <p>Social</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
