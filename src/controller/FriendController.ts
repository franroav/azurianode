/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { NextFunction, Request, Response } from "express";
import { FriendModel } from "../Model/FriendModel";

export class FriendController {
  static getAll = async (req: Request, res: Response) => {
    const allFriends = FriendModel.getAll(req, res);
    return allFriends;
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const UserById = FriendModel.getById(req, res, id);
    return UserById;
  };

  static newFriend = async (req: Request, res: Response) => {
    //destructuring request
    const { name, gender } = req.body;

    const newfriend = FriendModel.newUser(req, res, name, gender);

    return newfriend;
  };

  static editFriend = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, gender } = req.body;

    const editUser = FriendModel.editUser(req, res, id, name, gender);

    return editUser;
  };

  static deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteUser = FriendModel.deleteUser(req, res, id);

    return deleteUser;
  };
}

export default FriendController;
