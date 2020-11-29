/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

/*** ROUTES */
import { Router } from "express";

import user from "./user";
import friends from "./friend";

const routes = Router();

routes.use("/users", user);
routes.use("/friends", friends);

export default routes;
