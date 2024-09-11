import express, { Application } from "express";
import NodeCache from "node-cache";
import Stripe from "stripe";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import { config } from "dotenv"
// Importing Routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/service.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";
import { STRIPE_KEY } from "./config/config.js";


const stripeKey = STRIPE_KEY

export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);


app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

export default app