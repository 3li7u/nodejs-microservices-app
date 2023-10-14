module.exports = (error, req, res, next) => {
  if (error.name === "ValidationError")
    res.status(422).json({
      success: false,
      message: error.message,
    });
  else
    res.status(500).json({
      success: false,
      message: error.message,
    });
  next(error);
};
