module.exports.sendResponse = ({ res, results }) => {
  if (results === null || results === undefined)
    return res.status(404).json({
      success: false,
      statusCode: 404,
      statusMessage: 'Resource Not Found',
    });

  return res.status(200).json({
    success: true,
    data: results,
  });
};
