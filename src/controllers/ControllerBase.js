class ControllerBase {
  resError(result) {
    const { statusCode = 500, message = "Internal App Error!" } = result;
    return ({ 
      statusCode,
      message
    });
  }

  resSuccess(result) {
    return ({
      statusCode: 200,
      message: result
    })
  }
}

module.exports = ControllerBase;