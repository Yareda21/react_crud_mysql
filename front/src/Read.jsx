import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5050/read/${id}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      Read
      <div></div>
    </div>
  );
};

export default Read;
