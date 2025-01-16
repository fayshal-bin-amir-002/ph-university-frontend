import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  const [login] = useLoginMutation();

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
    } catch (error: any) {
      toast.error(error.data.message || error?.message, { id: toastId });
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput label={"User Id"} type={"text"} name={"userId"} />
        <PHInput label={"Password"} type={"text"} name={"password"} />
        <div className="pt-4 flex justify-end">
          <Button
            htmlType="submit"
            className="px-5 py-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="primary"
          >
            Login
          </Button>
        </div>
      </PHForm>
    </div>
  );
};

export default Login;
