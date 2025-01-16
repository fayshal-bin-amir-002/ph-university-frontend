import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { Key, useState } from "react";

interface TQueryParam {
  name: "name" | "year";
  value: boolean | Key;
}

interface DataType {
  _id: string;
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Autum",
        value: "Autum",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
    filterMode: "tree",
    // filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
    width: "30%",
  },
  {
    title: "Year",
    dataIndex: "year",
    filters: [
      {
        text: "2024",
        value: "2024",
      },
      {
        text: "2025",
        value: "2025",
      },
      {
        text: "2026",
        value: "2026",
      },
    ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
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

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemestersQuery(params);

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    // console.log("params", filters, extra);
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) => {
        queryParams.push({
          name: "name",
          value: item,
        });
      });
      filters.year?.forEach((item) => {
        queryParams.push({
          name: "year",
          value: item,
        });
      });
      // console.log(queryParams);
      setParams(queryParams);
    }
  };

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }: DataType) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <Table<DataType>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
