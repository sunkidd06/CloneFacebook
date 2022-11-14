const fs = require('fs');

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) {
            throw err;
        }
    })
}

module.exports = async function (req, res, next) {
    try {
        if (!req.files || Object.values(req.files).flat().length === 0) {
            return res.status(400).json({ message: "No files selected!" })
        }
        let files = Object.values(req.files).flat();
        files.forEach(file => {
            if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png" && file.mimetype !== "image/gif" && file.mimetype !== "image/webd") {
                removeTmp(file.tempFilePath)
                return res.status(400).json({ message: "Unsupported format" })
            }
            if (file.size > 1024 * 1024 * 5) {
                removeTmp(file.tempFilePath);
                return res.status(400).json({ message: "File size is too large" });
            }
        });
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}