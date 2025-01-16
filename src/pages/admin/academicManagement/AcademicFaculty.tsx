import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";

interface DataType {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Action",
    key: "x",
    render: () => {
      return (
        <div>
          <Button>Update</Button>
        </div>
      );
    },
  },
];

const AcademicFaculty = () => {
  const { data, isLoading, isFetching } =
    useGetAllAcademicFacultiesQuery(undefined);

  const tableData = data?.data?.map(({ _id, name }: DataType) => ({
    key: _id,
    name,
  }));

  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <Table<DataType>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

export default AcademicFaculty;
