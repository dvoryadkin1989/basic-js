function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
      .filter(m => typeof m === 'string')
      .filter(m => m.length > 0)
      .map(m => m.trim())
      .map(m => m.charAt(0).toUpperCase())
      .sort()
      .join("");
}

module.exports =  createDreamTeam;