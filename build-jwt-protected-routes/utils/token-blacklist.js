const blacklist = new Set();

function blacklistToken(token){
    return blacklist.add(token);
}

function isBlacklisted(token){
    return blacklist.has(token);
}

export {blacklistToken, isBlacklisted};