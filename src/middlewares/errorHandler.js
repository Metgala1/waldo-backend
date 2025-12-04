module.exports = (err, req, res, next) => {
    console.error('Error:', err);

    return res.status(500).json({
        status: 'error',
        message: 'Something went wrong on the server.'
    });
};