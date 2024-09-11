import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  allCoupons,
  applyDiscount,
  createPaymentIntent,
  deleteCoupon,
  newCoupon,
} from "../controllers/payment.js";

const router = express.Router();

// route - /api/v1/payment/create
router.route("/create").post(createPaymentIntent)

// route - /api/v1/payment/coupon/new
router.route("/discount").get(applyDiscount)

// route - /api/v1/payment/coupon/new
router.route("/coupon/new").post(adminOnly, newCoupon)

// route - /api/v1/payment/coupon/all
router.route("/coupon/all").get(adminOnly, allCoupons)

// route - /api/v1/payment/coupon/:id
router.route("/coupon/:id").delete(adminOnly, deleteCoupon)

export default router;
