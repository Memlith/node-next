import express from "express";
import "dotenv/config";
import routes from "./routes";
import cors from "cors";

const app = express();

//json
app.use(express.json());
//cors
app.use(cors());
//routes
app.use(routes);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

//server start port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
