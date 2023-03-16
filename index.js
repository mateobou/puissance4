import { app } from "./app.js";

const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});