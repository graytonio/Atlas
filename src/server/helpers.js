module.exports.sendResponse = ({ res, data, statusCode }) => {
  res.status(statusCode).json({
    success: true,
    data,
  });
};
