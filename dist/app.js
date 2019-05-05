"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const jwtKoa = require("koa-jwt");
const cors = require("koa2-cors");
const route_1 = require("./routes/route");
const sequelize_typescript_1 = require("sequelize-typescript");
const token_1 = require("./config/token");
// tslint:disable-next-line:no-unused-expression
new sequelize_typescript_1.Sequelize({
    operatorsAliases: true,
    host: '192.168.1.21',
    port: 3356,
    database: 'test_db',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
    // storage: ':memory:',
    define: {
        timestamps: true,
        paranoid: true,
        underscored: true,
        charset: 'utf8',
        freezeTableName: true,
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    timezone: '+08:00',
    modelPaths: [__dirname + '/models'],
});
const app = new Koa();
app.use(bodyParser());
app.use((ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
        }
    });
});
app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// app.use(views(path.resolve(__dirname, '..', 'views'), {
//     extension: 'ejs',
// }));
app.use(jwtKoa({
    secret: token_1.secret,
}).unless({
    path: [/\/login/, /\/register/, /\/get\S{0,100}/],
    method: ['OPTIONS', 'GET'],
}));
app.use(route_1.default.routes()).use(route_1.default.allowedMethods());
app.listen(4000);
//# sourceMappingURL=app.js.map