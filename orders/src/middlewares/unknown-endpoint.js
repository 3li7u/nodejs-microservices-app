module.exports = (req, res) =>
  res.status(404).json({
    success: false,
    message: `The requested end point: ${req.url} hasn't been found`,
  });
