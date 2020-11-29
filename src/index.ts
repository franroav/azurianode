/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes/index";

const PORT = process.env.PORT || 3000;

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    //middleware
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    // Routes
    app.use("/", routes);

    // LISTEN ON PORT 3000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
