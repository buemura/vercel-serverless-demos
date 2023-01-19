import express from "express";
import { router } from "./routes";

const app = express();

const PORT = 5555 || process.env.PORT;

app.use(router);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
