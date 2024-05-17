import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/member.service";
import { Message } from "../libs/Error";

const storeController: T = {};
const memberService = new MemberService();
storeController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");        
        res.render("home");
    } catch (err) {
        console.log("Error, goHome:", err);
    }
}

storeController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");        
        res.render("signup");
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
}

storeController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");        
        res.render("login");
    } catch (err) {
        console.log("Error, getLogin:", err)
    }
}

storeController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.STORE;
        const result = await memberService.processSignup(newMember)
        req.session.member = result;
        req.session.save(function () {
            res.send(result)
        })
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
}

storeController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");  
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);
        req.session.member = result;
        req.session.save(function () {
            res.send(result)
        })
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.send(err);
    }
}

storeController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");  
        if (req.session.member) res.send(`<script> alert("Hi, ${req.session.member.memberNick}") </script>`)
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
}

export default storeController;