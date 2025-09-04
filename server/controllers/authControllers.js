const bcrypt = require("bcryptjs");

const loginController = async (userPass, dbPass) => {
    return await bcrypt.compare(userPass, dbPass);
}

module.exports = {
    loginController
}