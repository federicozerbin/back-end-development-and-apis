import {verifyToken} from "../utils/jwt.js";
import {isBlacklisted} from "../utils/token-blacklist.js";

function authenticate(req, res, next) {
    const headerString = req.headers.authorization;
    if (!headerString || !headerString.startsWith("Bearer ")) { 
        return res.status(401).json({ "error": "No token provided." }); }
    else {
        const token = headerString.split(" ")[1];
        if (isBlacklisted(token)) return res.status(401).json({ "error": "Invalid or expired token." });
        const decodedPayload = verifyToken(token);
        if (!decodedPayload) { 
            return res.status(401).json({ "error": "Invalid or expired token." }); }
        req.user = decodedPayload;
        next();
    }
};

export {authenticate};