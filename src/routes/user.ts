/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import { UserController } from "./../controller/UserController";
import { Router } from "express";
const router = Router();

//Get all users
router.get("/", UserController.getAll);

// get one user
router.get("/:id", UserController.getById);

// create a new User
router.post("/", UserController.newUser);

// Edit user
router.put("/:id", UserController.editUser);

// Delete

router.delete("/:id", UserController.deleteUser);

export default router;
