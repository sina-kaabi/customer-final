const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const hbs = require("hbs");
const exphbs = require('express-handlebars');
//const url = 'mongodb://localhost/AlienDBex'
const app = express()




// app.set('views', path.join(__dirname, 'views'));
// // app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
// app.set('view engine', 'handlebars');
// app.set('port', (process.env.PORT || 3000));

// To have access to `body` property in the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Normalizes the path to the views folder
app.set("views", path.join(__dirname, "views"));
// Sets the view engine to handlebars
app.set("view engine", "hbs");
// Handles access to the public folder
app.use(express.static(path.join(__dirname, "..", "public")));


const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/EmployeesDB";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
});


 app.use(express.json()) 

 // 👇 Start handling routes here
//const index = require("./routes/index.routes");
//app.use("/", index);

const employeeAPIRouter = require('./routes/employees')
const employeeViewsRouter = require('./routes/employees-views')

app.use('/api/v1/employees', employeeAPIRouter)
app.use('/employees', employeeViewsRouter)

app.listen(3000, () =>{
    console.log('Server started on port ' );
});