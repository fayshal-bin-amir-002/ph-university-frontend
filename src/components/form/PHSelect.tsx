import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  disabled?: boolean;
  options:
    | {
        value: string;
        label?: string;
      }[]
    | undefined;
};

const PHSelect = ({ name, label, options, disabled }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            size="large"
            {...field}
            style={{ width: "100%" }}
            options={options}
            disabled={disabled}
          />
          {error && <small className="text-red-500">{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
