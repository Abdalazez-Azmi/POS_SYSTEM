const express = require("express");
const oracledb = require("oracledb");
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())

const port = 5502;
var password = "hr";
// var data = 'insert into suppliers values ("Ali","Frozen","0797819843");'
var data = 'select employee_id,first_name,last_name from employees where department_id = 100'





async function selectAllEmployees(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: "hr",
      password: password,
      connectString: "localhost:1521/orcl",
    });

    console.log("connected to database");
    // run query to get all employees

 
    result = await connection.execute(data);
      res.send(result)
  
  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log("close connection success");
      } catch (err) {
        console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return res.send("there is no rows");
    } else {
      result = result.rows;
      console.log(result); 
    

      //send all employees

      return res.send(result.rows);
    }
  }
}

//get /employess
app.get("/", function (req, res) {
  selectAllEmployees(req, res);
});

async function selectEmployeesById(req, res, id) {
  try {
    connection = await oracledb.getConnection({
      user: "hr",
      password: password,
      connectString: "localhost:1521/orcl",
    });
    // run query to get employee with employee_id
    result = await connection.execute(
      `SELECT * FROM employees where employee_id=:id`,
      [id]
    );
  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
      } catch (err) {
        return console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return res.send("query send no rows");
    } else {
      //send all employees

      return res.send(result.rows);
    }
  }
}

//get /employee?id=<id employee>
app.get("/", function (req, res) {
  //get query param ?id
  let id = req.query.id;
  // id param if it is number
  if (isNaN(id)) {
    res.send("Query param id is not number");
    return;
  }
  selectEmployeesById(req, res, id);
});

app.listen(port, () => console.log("app listening on port %s!", port));