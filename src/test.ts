import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    host: '192.168.1.21',
    port: 3356,
    database: 'test_db',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
    // storage: ':memory:',
    // modelPaths: [__dirname + '/models'],
});
const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
});

sequelize.sync()
    .then(() => User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
    }))
    .then((jane) => {
        console.log(jane);
    });
