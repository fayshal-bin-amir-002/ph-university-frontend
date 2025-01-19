import { useParams } from "react-router-dom";
import { useGetASingleStudentQuery } from "../../../redux/features/admin/userManagement.api";

const StudentDetails = () => {
  const { studentId } = useParams();

  const {} = useGetASingleStudentQuery(studentId);

  return (
    <div>
      <h1>StudentDetails</h1>
      <p>Welcome to the StudentDetails of {studentId}</p>
    </div>
  );
};

export default StudentDetails;
