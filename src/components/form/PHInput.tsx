import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TPHInputProps) => {
  return (
    <div>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name} className="p-1.5 mt-1" />
        )}
      />
    </div>
  );
};

export default PHInput;
