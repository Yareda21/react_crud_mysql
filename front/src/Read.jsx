import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/read/${id}`)
      .then((result) => {
        setStudent(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="flex my-4">Details of {student.Name}</h1>
      <div className="flex flex-col text-left ml-3">
        <p>Name of Student: - {student.Name}</p>
        <p>Email: - {student.email}</p>
        <p>Phone Number: - {student.phone}</p>
      </div>
      <div className="flex gap-4 my-4 justify-center">
        <button className="flex bg-slate-400">
          <Link className=" text-white/75" to={"/"}>
            Go Home
          </Link>
        </button>
        <button className="flex bg-slate-400  text-white/75">
          <Link className=" text-white/75" to={`/edit/${student.id}`}>
            Edit
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Read;
