import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  database: "crud",
  password: "",
  user: "root",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";

  db.query(sql, (err, result) => {
    if (err) return res.json("Error in  the server");
    return res.json(result);
  });
});

app.post("/student", (req, res) => {
  const sql = "INSERT INTO student (`Name`, `email`, `phone`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.phone];

  db.query(sql, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json(data);
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM student WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return console.log(err);
    return res.json(result);
  });
});

app.listen(5050, () => {
  console.log("Server is listening on port 5050...");
});
