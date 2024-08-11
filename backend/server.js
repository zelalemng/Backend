const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/error");
const connectDB = require("./config/database");
const cors = require("cors");
const port = process.env.PORT || 5000;
console.log(process.env.NODE_ENV)
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const corsOptions = {
  origin: 'https://agentpro.onrender.com', // Your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use("/api/tables", require("./routes/tables"));
app.use("/api/items", require("./routes/items"));
app.use("/api/menus", require("./routes/menus"));
app.use("/api/restaurants", require("./routes/restaurants"));
app.use("/api/users", require("./routes/users"));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/categories', require('./routes/categories'));
app.use('/', express.static(path.join(__dirname, "public")));
//if (process.env.NODE_ENV === "production") {
  
  //app.get("*", (req, res) =>
    //res.sendFile(
      //path.resolve(__dirname, "../", "frontend", "build", "index.html")
    //)
  //);
//} else {
  //app.get("/", (req, res) => res.send("Please set to production"));
//}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
