import express from "express"
const routerAdmin = express.Router();
import storeController from "./controllers/store.controller";

/** Store **/
routerAdmin.get("/", storeController.goHome);

routerAdmin
    .get("/signup", storeController.getSignup)
    .post("/signup", storeController.processSignup)

routerAdmin
    .get("/login", storeController.getLogin)
    .post("/login", storeController.processLogin)

routerAdmin.get("/logout", storeController.logout)
routerAdmin.get("/check-me", storeController.checkAuthSession)
export default routerAdmin;