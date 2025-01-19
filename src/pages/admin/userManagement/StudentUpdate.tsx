import { useParams } from "react-router-dom";

const StudentUpdate = () => {
  const { studentId } = useParams();
  console.log(studentId);

  return (
    <div>
      <h1>StudentUpdate</h1>
      <p>Welcome to the StudentUpdate component!</p>
    </div>
  );
};

export default StudentUpdate;
