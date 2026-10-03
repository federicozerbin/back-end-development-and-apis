import path from "path";
import fs from "fs";

const DB_PATH = path.join(import.meta.dirname, "../data/users.json");

function readUsers() {
    const data = fs.readFileSync(DB_PATH, "utf8").trim();
    if (!data) return [];
        else return JSON.parse(data);
}

function writeUsers(users){
    fs.writeFileSync(DB_PATH,JSON.stringify(users, null, 2));
}

function findByEmail(email) {
    return readUsers().find((u) => u.email === email) || null;
}

function findById(id) {
    return readUsers().find((u) => u.id === id) || null;
}

export {readUsers, writeUsers, findByEmail, findById};