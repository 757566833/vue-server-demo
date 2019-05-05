"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
class Login {
    static async login(json) {
        const userone = await User_1.User.findOne({ where: json, attributes: ['isAdmin'] });
        if (userone === null) {
            return null;
        }
        else {
            return userone;
        }
    }
}
exports.Login = Login;
//# sourceMappingURL=login.js.map