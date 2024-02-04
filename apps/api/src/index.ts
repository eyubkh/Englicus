import { Hono } from "hono";
import userRouter from "./model/user";
require("dotenv").config();
import mysql from "mysql2";

const app = new Hono();

const connection = mysql.createConnection(
	`mysql://${process.env.PSCALE_DB_USERNAME}:${process.env.PSCALE_DB_PASSWORD}@aws.connect.psdb.cloud/englicus-db?ssl={"rejectUnauthorized":true}`,
);
console.log("Connected to PlanetScale!");
connection.end();

app.route("/test", userRouter);

export default {
	port: 3001,
	fetch: app.fetch,
};
