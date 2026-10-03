import {verifyToken} from "../utils/jwt.js";
import {isBlacklisted} from "../utils/token-blacklist.js";

export default function authenticate(req, res, next) {
    const headerString = req.headers.authorization;
    if (!headerString || !headerString.startsWith("Bearer ")) { return res.status(401).json({ message: "No token provided" }); }
    else {
        const token = headerString.split(" ")[1];
        if (isBlacklisted(token)) { return res.status(401).json({ message: "Token has been invalidated. Log in again." }); }
        const decodedPayload = verifyToken(token);
        if (!decodedPayload) { return res.status(401).json({ message: "Invalid or expired token" }); }
        else req.user
        req.user = decodedPayload;
        next();
    }
};