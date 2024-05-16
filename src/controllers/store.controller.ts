import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/member.service";

const storeController: T = {};
const memberService = new MemberService();
storeController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");        
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
    }
}

storeController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");        
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
}

storeController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");        
        res.send("Login Page")
    } catch (err) {
        console.log("Error, getLogin:", err)
    }
}

storeController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        console.log("req.body:", req.body)

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.STORE;

        
        const result = await memberService.processSignup(newMember)
               
        res.send(result);
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
}

storeController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");  
        console.log("req.body:", req.body);
        const input: LoginInput = req.body;

        const result = await memberService.processLogin(input);
              
        res.send(result);
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
}

export default storeController;