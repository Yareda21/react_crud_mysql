import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5050/read/${id}`)
      .then((result) => {
        setValues({
          ...values,
          Name: result.data[0].Name,
          email: result.data[0].email,
          phone: result.data[0].phone,
        });
      })
      .catch((err) => console.log(err));
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5050/edit/${id}`, values)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log("messages are :", err));
  };

  return (
    <div>
      <h2 className="text-4xl mx-3 mb-10 font-bold">Edit Student Data</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <div className="flex text-left flex-col gap-1">
          <label htmlFor="name">Enter Name</label>
          <input
            onChange={(e) => setValues({ ...values, Name: e.target.value })}
            className="py-1 px-4"
            type="text"
            placeholder="Name"
            value={values.Name}
          />
        </div>
        <div className="flex text-left flex-col gap-1">
          <label htmlFor="email">Enter Email</label>
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="py-2 px-4"
            type="email"
            placeholder="@email.com"
            value={values.email}
          />
        </div>
        <div className="flex text-left flex-col gap-1">
          <label htmlFor="phone">Enter Phone </label>
          <input
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className="py-2 px-4"
            type="tel"
            placeholder="+251"
            value={values.phone}
          />
        </div>

        <button type="submit" className="block bg-green-700">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
