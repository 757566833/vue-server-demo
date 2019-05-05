"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    host: '192.168.1.21',
    port: 3356,
    database: 'test_db',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
});
const User = sequelize.define('user', {
    username: sequelize_typescript_1.Sequelize.STRING,
    birthday: sequelize_typescript_1.Sequelize.DATE,
});
sequelize.sync()
    .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
}))
    .then((jane) => {
    console.log(jane);
});
//# sourceMappingURL=test.js.map