import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/student", values)
      .then((res) => {
        console.log(res);
        navigate("/");
        alert("data has been added successfuly");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="text-4xl mx-3 mb-10 font-bold">Add a New Student</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex text-left flex-col gap-1">
          <label htmlFor="name">Enter Name</label>
          <input
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="py-1 px-4"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex text-left flex-col gap-1">
          <label htmlFor="email">Enter Email</label>
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="py-2 px-4"
            type="email"
            placeholder="@email.com"
          />
        </div>
        <div className="flex text-left flex-col gap-1">
          <label htmlFor="phone">Enter Phone </label>
          <input
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className="py-2 px-4"
            type="tel"
            placeholder="+251"
          />
        </div>

        <button type="submit" className="block bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
