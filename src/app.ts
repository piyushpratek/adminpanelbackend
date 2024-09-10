import express, { Application } from "express";
// import NodeCache from "node-cache";
// import morgan from "morgan";
// import Stripe from "stripe";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
import { config } from "dotenv"
// Importing Routes

// import { STRIPE_KEY } from "./config/config.js";

// config({
//     path: "./.env",
// });

// const stripeKey = STRIPE_KEY

// export const stripe = new Stripe(stripeKey);
// export const myCache = new NodeCache();

const app: Application = express();

app.use(express.json());
// app.use(morgan("dev"));
// app.use(cors());

app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});

// Using Routes
// app.use("/api/v1/user", userRoute);


app.use("/uploads", express.static("uploads"));
// app.use(errorMiddleware);

export default app