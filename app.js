import express from "express";

const app = express();
export default app;
import employees from "./db/employees.js";

//hello employees
app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

//list of employees
app.route("/employees").get((req, res) => {
  res.send(employees);
});

//Random employee
app.get("/employees/random", (req, res) => {
  const idx = Math.floor(Math.random() * employees.length); 
  res.json(employees[idx]); 
});

//return an individual employee
app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  if(isNaN(id)){
    return res.status(404).send("id need to be a number")
  }
  if (id > employees.length - 1) {
    return res.status(404).send("Employees not found");
  }
  res.status(200).send(employees[id-1]);
});






