import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "0001",
      password: "superAdmin123",
    },
  });

  const [login, { data, error, isLoading }] = useLoginMutation();

  const onSubmit = async (data: { userId: string; password: string }) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ token: res.data.accessToken, user: user }));
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
