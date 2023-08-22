const bcrypt = require("bcrypt");

function isAdmKeyValid (adm, key) {
    const REQUIRED_LENGTH = process.env.REQUIRED_LENGTH
    if (key.length != REQUIRED_LENGTH) return false;
    const ADM_CLEARANCE = process.env.ADM_CLEARANCE;
    if (adm.clearance != ADM_CLEARANCE) return false;
    const isKeyValid = bcrypt.compareSync(key, adm.key);
    if (!isKeyValid) return false;
    return true;
};

module.exports = {
    isAdmKeyValid
};