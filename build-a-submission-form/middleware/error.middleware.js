function finalErrorHandler(err, req, res, next) {
    const status = err.status || 500;
    console.log(`Error: ${err.message}`);

    const message = status === 500
        ? 'Internal Server Error (Check Server Logs)'
        : err.message;

    res.status(status).json({
        error: true, 
        status: status,
        message: message
    });
}


function notFoundHandler(req, res, next) {
    const error = new Error(`Resource not found at ${req.originalUrl}`);
    error.status = 404;
    next(error);
}

export { finalErrorHandler, notFoundHandler };