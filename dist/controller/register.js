"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class Register {
    static async register(json) {
        const finduserResult = await User_1.User.findOne({ where: json });
        if (finduserResult === null) {
            await User_1.User.create(json);
            return new Promise((resolve) => { resolve('success'); });
        }
        else {
            return new Promise((resolve) => { resolve('failure'); });
        }
    }
}
exports.Register = Register;
//# sourceMappingURL=register.js.map