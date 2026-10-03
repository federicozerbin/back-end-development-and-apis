import jwt from "jsonwebtoken";

function signToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

function verifyToken(token){
    try {
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
        return(decodedPayload);
    } catch {
        return null;
    }
}

export {signToken, verifyToken};