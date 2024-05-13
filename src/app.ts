import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** 1-SESSIONS **/


/** 1-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 1-ROUTERS **/
app.use("/admin", routerAdmin)
app.use("/", router);

export default app;
