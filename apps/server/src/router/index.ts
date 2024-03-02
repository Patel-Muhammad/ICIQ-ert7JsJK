import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes";

router.get("/", (req, res) => {
  res.send("API is running...");
});

router.use("/user", userRoutes);

export default router;
