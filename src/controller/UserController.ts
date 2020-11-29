/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../Model/UserModel";

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const allUsers = UserModel.getAll(req, res);
    return allUsers;
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const UserById = UserModel.getById(req, res, id);
    return UserById;
  };

  static newUser = async (req: Request, res: Response) => {
    //destructuring el request del formulario
    const { username, fullname, age } = req.body;

    const newUser = UserModel.newUser(req, res, username, fullname, age);

    return newUser;
  };

  static editUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, role, fullname, age } = req.body;

    const editUser = UserModel.editUser(req, res, id, username, fullname, age);

    return editUser;
  };

  static deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteUser = UserModel.deleteUser(req, res, id);

    return deleteUser;
  };
}

export default UserController;
