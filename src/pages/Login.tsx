import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login, { error, isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ token: res.data.accessToken, user: user }));
      navigate(`/${user.role}/dashboard`);
      toast.success(`${user.role} logged in successfully!`, {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[400px] shadow-md p-6 space-y-4 rounded-lg"
      >
        <div>
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            id="id"
            className="border w-full p-1.5 rounded-md mt-1"
            {...register("userId")}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            className="border w-full p-1.5 rounded-md mt-1"
            {...register("password")}
          />
        </div>
        <div className="pt-4 flex justify-end">
          <Button
            htmlType="submit"
            className="px-5 py-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="primary"
            disabled={isLoading}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
