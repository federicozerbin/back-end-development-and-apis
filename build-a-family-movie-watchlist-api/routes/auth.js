import express from "express";
import { findByUsername, readUsers, writeUsers } from "../utils/db.js";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { signToken } from "../utils/jwt.js";
import {authenticate} from "../middleware/authenticate.js";
import { blacklistToken } from "../utils/token-blacklist.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) 
            return res.status(400).send("username and password are required");
        const usernameExist = findByUsername(username);
        if (!usernameExist) return res.status(401).json({ message: "Invalid credentials" });
        
        const match = await bcrypt.compare(password, usernameExist.passwordHash);

        if (match) {
            const token = signToken(usernameExist);
            res.status(200).json({ message: "User logged", token });
        } else return res.status(401).json({ message: "Invalid credentials" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/logout", authenticate, (req, res) => {
    const headerString = req.headers.authorization;
    const token = headerString.split(" ")[1];
    blacklistToken(token);
    res.json({ message: "Logged out successfully" });
});

router.get("/profile", authenticate, (req, res) => {
    res.json({ user: req.user });
});

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).send("username and password are required");
        if (findByUsername(username)) return res.status(409).send("username already in use");
        const passwordHash = await bcrypt.hash(password, 10);
        const users = readUsers();
        const newUser = {
            id: randomUUID(),
            username,
            passwordHash,
            role: "user",
        };
        users.push(newUser);
        writeUsers(users);
        const token = signToken(newUser);
        res.status(201).json({ message: "User registered", token });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;