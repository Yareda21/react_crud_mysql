import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/read/${id}`)
      .then((result) => {
        setStudent(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>
        Details of{" "}
        {student.map((one) => {
          return one.Name;
        })}
      </h3>
      <div className="flex flex-col text-left">
        <p>Name of Student: - {student.Name}</p>
        <p>Email of Student: - {student.email}</p>
        <p>Phone of Student: - {student.phone}</p>
        <p>id of Student: - {student.id}</p>
      </div>
    </div>
  );
};

export default Read;
