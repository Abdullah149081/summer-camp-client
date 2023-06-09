import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Social = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlerGoogle = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };
  return (
    <div className="text-center mt-2  font-bold">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-5 bg-gray-200 border dark:bg-gray-700" />
        <span className="absolute px-3  text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 rounded-full font-bold uppercase">or</span>
      </div>

      <div className="mt-px">
        <button onClick={handlerGoogle} type="button" className="btn font-bold btn-camp">
          <FcGoogle className="w-6 h-6 " /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Social;
