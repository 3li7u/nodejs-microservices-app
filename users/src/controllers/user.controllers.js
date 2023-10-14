const { User } = require("../models");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: `${users.length} users have been fetched successfully`,
      data: {
        users,
        total: users.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user)
      res.status(200).json({
        success: true,
        message: `User: ${user.id} has been fetched successfully`,
        data: user,
      });
    else
      res.status(404).json({
        success: false,
        message: `The requested user: ${id} hasn't been found`,
      });
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  const userData = req.body;
  try {
    const user = new User(userData);
    const addedUser = await user.save();
    res.status(201).json({
      success: true,
      message: `New user: ${addedUser.id} has been added successfully`,
      data: addedUser,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
      context: "query",
    });
    if (updatedUser)
      res.status(200).json({
        success: true,
        message: `${updatedUser.id} has been updated successfully`,
        data: updatedUser,
      });
    else
      res.status(404).json({
        success: true,
        message: `The requested user ${id} hasn't been found`,
      });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser)
      res.status(200).json({
        success: true,
        message: `${deletedUser.id} has been deleted successfully`,
        data: deletedUser,
      });
    else
      res.status(404).json({
        success: true,
        message: `The requested user ${id} hasn't been found`,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
};
