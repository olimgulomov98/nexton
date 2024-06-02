import express from "express"
const routerAdmin = express.Router();
import storeController from "./controllers/store.controller";
import productController from "./controllers/product.controller";

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

/** Product **/

routerAdmin.get("/product/all", storeController.verifyStore, productController.getAllProduct)

routerAdmin.post("/product/create", storeController.verifyStore, productController.createNewProduct)

routerAdmin.post("/product/:id", storeController.verifyStore, productController.updateChosenProduct)
export default routerAdmin;