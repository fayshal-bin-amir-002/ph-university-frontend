import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  // console.log(data);

  return (
    <div>
      <h1>AcademicSemester</h1>
      <p>Welcome to the AcademicSemester component!</p>
    </div>
  );
};

export default AcademicSemester;
