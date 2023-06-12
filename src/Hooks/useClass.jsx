import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: join = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("token"),
    queryFn: async () => {
      const res = await axiosSecure(`/selected?email=${user?.email}`);
      return res.data;
    },
  });
  return [join, refetch];
};

export default useClass;
