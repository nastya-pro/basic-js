module.exports = function createDreamTeam(members) {
    let letters = [];
    if((members === null) || (typeof members !== typeof [])){
        return false
    }
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string") {
            letters.push(members[i].replace(/\s+/g, '').toUpperCase().slice(0,1));
        }
    }
    return letters.sort().join("")
};

