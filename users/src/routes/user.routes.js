const express = require("express");
const {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getOneUser);
userRouter.post("/", addUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
