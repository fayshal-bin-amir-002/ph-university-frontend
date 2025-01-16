import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TPHInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input size="large" {...field} type={type} id={name} />
            {error && <small className="text-red-500">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
