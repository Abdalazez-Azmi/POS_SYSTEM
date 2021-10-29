const express = require("express");
const oracledb = require("oracledb");
var app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())

const port = 5502;
var password = "pos";
// var data = 'insert into suppliers values ("Ali","Frozen","0797819843");'
var data = 
"SELECT * FROM employees"






async function selectAllEmployees(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: "pos",
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

// //get /employess
// app.get("/", function (req, res) {
//   selectAllEmployees(req, res)
// });



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function selectAllSUPPLIERS(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: "pos",
      password: password,
      connectString: "localhost:1521/orcl",
    });

    console.log("connected to database");
    // run query to get all employees

 
    result = await connection.execute('select * from suppliers');
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













// app.get("/", function (req, res) {
//   selectAllSUPPLIERS(req, res)

// });


app.get("/", function (req, res) {
  selectAllEmployees(req, res)


});









app.listen(port, () => console.log("app listening on port %s!", port));
