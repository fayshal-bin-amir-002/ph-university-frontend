import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "../../../components/form/PHInput";
import { z } from "zod";
import { toast } from "sonner";

const facultySchema = z.object({
  name: z.string({ required_error: "Faculty name is required" }),
});

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await addAcademicFaculty(data).unwrap();
      toast.success("Faculty created successfully");
    } catch (error: any) {
      // console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <Flex justify="center" align="center" style={{ height: "80vh" }}>
      <Col span={6}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(facultySchema)}>
          <PHInput type="text" name="name" label="Academic Faculty Name" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
