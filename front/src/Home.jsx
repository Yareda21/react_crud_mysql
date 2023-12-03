import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5050/delete/${id}`)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <div className="p-6 bg-white/10 text-white">
          <h2 className="text-4xl font-bold mb-3">Student</h2>
          <div className="flex relative right-0  my-3">
            <button>
              <Link to="/create">Add Student +</Link>
            </button>
          </div>
          <table className="border table-">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4 font-medium text-black uppercase tracking-wider">
                  Number
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4 font-medium text-black uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4 font-medium text-black uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4 font-medium text-black uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4 font-medium text-black uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="border ">
              {data &&
                data.map((each) => {
                  return (
                    <tr key={each.id}>
                      <td>{each.id}</td>
                      <td>{each.Name}</td>
                      <td className="px-3">{each.email}</td>
                      <td>{each.phone}</td>
                      <td className="flex gap-2 py-2 px-2">
                        <Link to={`/read/${each.id}`}>
                          <button>Read</button>
                        </Link>
                        <button className="flex bg-slate-400  text-white/75">
                          <Link
                            className=" text-white/75"
                            to={`/edit/${each.id}`}
                          >
                            Edit
                          </Link>
                        </button>
                        <button
                          onClick={() => handleDelete(each.id)}
                          className="flex text-red-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
