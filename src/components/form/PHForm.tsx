import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

type TFormConfig = { defaultValues?: Record<string, any>; resolver?: any };

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit = (data: FieldValues) => {
    onSubmit(data);
    // methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        onFinish={methods.handleSubmit(submit)}
        className="shadow-md p-6 space-y-4 rounded-lg"
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
