/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { validate } from "class-validator";

export class UserModel {
  //GET ALL USERS
  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    let users;
    try {
      users = await userRepository.find();
    } catch (error) {
      res.status(404).json({ message: "Something Went Wrong", error: error });
    }

    if (users.length > 0) {
      res.send(users);
    } else {
    }
  };

  // GET USER BY ID
  static getById = async (req: Request, res: Response, id: number) => {
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOneOrFail(id);
      res.send(user);
    } catch (error) {
      res.status(404).json({ message: "There are No Results" });
    }
  };

  //CREATE USER
  static newUser = async (
    req: Request,
    res: Response,
    username: string,
    fullname: string,
    age: number
  ) => {
    // instansciate new User object
    const user = new User();
    user.username = username;
    user.fullname = fullname;
    user.age = age;

    //validate
    const validationUser = {
      validationError: { target: false, value: false },
    };
    const errors = await validate(user, validationUser);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const userRepository = getRepository(User);

    try {
      await userRepository.save(user);
    } catch (error) {
      return res.status(409).json({ message: "There are No Results" });
    }

    res.status(201).json({ message: "User created successfully!" });
  };

  //UPDATE USER
  static editUser = async (
    req: Request,
    res: Response,
    id: number,
    username: string,
    fullname: string,
    age: number
  ) => {
    //hold user
    let user;

    const userRepository = getRepository(User);

    // try get user
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = username;
    user.fullname = fullname;
    user.age = age;

    const validationUser = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationUser);
    console.log("err", errors);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // try to save user
    try {
      await userRepository.save(user);
    } catch (error) {
      res.status(409).json({ message: "User already exists" });
    }
    res.status(200).json({ message: "User update" });
  };

  //DELETE
  static deleteUser = async (req: Request, res: Response, id: number) => {
    const userRepository = getRepository(User);
    let user: User;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "User not found" });
    }

    userRepository.delete(id);
    res.status(200).json({ message: "User deleted" });
  };
}

export default UserModel;
