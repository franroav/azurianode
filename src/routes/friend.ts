/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import { FriendController } from "./../controller/FriendController";
import { Router } from "express";

const router = Router();

//Get all Friends
router.get("/", FriendController.getAll);

// get one Friend
router.get("/:id", FriendController.getById);

// create a new Friend
router.post("/", FriendController.newFriend);

// Edit Friend
router.put("/:id", FriendController.editFriend);

// Delete Friend

router.delete("/:id", FriendController.deleteUser);

export default router;
