const successTemplate =  (res, message, result) => {
    res.status(200).json({
        message: message,
        result: result,
    });
};

const errorTemplate = (res, message, result) => {
    res.status(500).json({
        message: message,
        status: status,
    });
};