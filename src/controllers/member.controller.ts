import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import Errors from "../libs/Error";
import { LoginInput, Member, MemberInput } from "../libs/types/member";

// REACT

const memberController: T = {};
const memberService = new MemberService();

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
    result: Member = await memberService.signup(input);

    res.send(result)
  } catch (err) {
    console.log("Error, signup:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard)
  }
}

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
    result = await memberService.login(input);

    res.send(result)
  } catch (err) {
    console.log("Error, login:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
}



export default memberController;