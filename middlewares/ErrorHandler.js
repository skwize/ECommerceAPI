module.exports = (err, req, res, next) => {
    if (!err) return next()

    res.status(err.status || 500)
    res.send(err.message || "Internal server error")
    
    next()
}