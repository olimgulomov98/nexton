import { Request, Response } from "express";
import { T } from "../libs/types/common";

const storeController: T = {};
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
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
}

export default storeController;