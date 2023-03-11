module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') return next()
    if (req.method === 'GET') return next()

    if (Object.keys(req.body).length === 0){
        return res.status(400).json({
            error: "Empty body"
        })
    }
    
    next()
}