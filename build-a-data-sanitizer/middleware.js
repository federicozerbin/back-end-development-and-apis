function inputCleaner(req, res, next) {
    if (req.body.username) {
        req.body.username = req.body.username.toLowerCase();
    }
    if (req.body.comment) {
        req.body.comment = req.body.comment.replace(/<[^>]*>/g, '');
    }
    next();
}

function inputValidator(req, res, next) {
    const username = req.body.username || '';
    if (username.length >= 3) {
        return next();
    }
    res.redirect('/form?error=' + encodeURIComponent('Username must be at least 3 characters.'));
}

export { inputCleaner, inputValidator };