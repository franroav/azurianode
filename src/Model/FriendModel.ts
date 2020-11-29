/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Friend } from "../entity/Friend";
import { validate } from "class-validator";

export class FriendModel {
  //GET ALL FRIENDS
  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(Friend);
    let friends;
    try {
      friends = await userRepository.find();
    } catch (error) {
      res.status(404).json({ message: "Something Went Wrong", error: error });
    }

    if (friends.length > 0) {
      res.send(friends);
    } else {
    }
  };

  // GET FRIEND BY ID
  static getById = async (req: Request, res: Response, id: number) => {
    const userRepository = getRepository(Friend);
    try {
      const user = await userRepository.findOneOrFail(id);
      res.send(user);
    } catch (error) {
      res.status(404).json({ message: "There are No Results" });
    }
  };

  //CREATE FRIEND
  static newUser = async (
    req: Request,
    res: Response,
    name: string,
    gender: string
  ) => {
    // NEW FRIEND OBJECT
    const friend = new Friend();
    friend.name = name;
    friend.gender = gender;

    //validate
    const validationUser = {
      validationError: { target: false, value: false },
    };
    const errors = await validate(friend, validationUser);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const userRepository = getRepository(Friend);

    try {
      await userRepository.save(friend);
    } catch (error) {
      return res.status(409).json({ message: "There are No Results" });
    }

    res.status(201).json({ message: "Friend created successfully!" });
  };

  static editUser = async (
    req: Request,
    res: Response,
    id: number,
    name: string,
    gender: string
  ) => {
    //hold friend
    let friend: Friend;

    const friendRepository = getRepository(Friend);

    try {
      friend = await friendRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "User not found" });
    }

    friend.name = name;
    friend.gender = gender;

    const validationUser = { validationError: { target: false, value: false } };
    const errors = await validate(friend, validationUser);
    console.log("err", errors);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // try to save Friend
    try {
      await friendRepository.save(friend);
    } catch (error) {
      res.status(409).json({ message: "User already exists" });
    }
    res.status(200).json({ message: "User update" });
  };
  //DELETE
  static deleteUser = async (req: Request, res: Response, id: number) => {
    const userRepository = getRepository(Friend);
    let user: Friend;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "Friend not found" });
    }

    userRepository.delete(id);
    res.status(200).json({ message: "Friend deleted" });
  };
}

export default FriendModel;
