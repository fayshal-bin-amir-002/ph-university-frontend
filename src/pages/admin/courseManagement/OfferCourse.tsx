import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";

import PHInput from "../../../components/form/PHInput";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";

const OfferCourse = () => {
  const [id, setId] = useState("");

  console.log("Inside parent component", id);

  const { data: academicFacultyData } =
    useGetAllAcademicFacultiesQuery(undefined);

  const academicSemesterOptions = academicFacultyData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: item.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelectWithWatch
            onValueChange={setId}
            label="Academic Faculty"
            name="academicSemester"
            options={academicSemesterOptions}
          />
          <PHInput disabled={!id} type="text" name="test" label="Test" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
