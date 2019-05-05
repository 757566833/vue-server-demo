"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const sequelize_typescript_1 = require("sequelize-typescript");
// import { secret } from './config/token';
// import router from './routes/route';
// console.log(secret);
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
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
// app.use(jwtKoa({
//     secret,
// }).unless({
//     path: [/\/login/, /\/register/, /\/get\S{0,100}/],
//     method: ['OPTIONS', 'GET'],
// }));
console.log('11');
// app.use(router.routes()).use(router.allowedMethods());
app.listen(10002);
//# sourceMappingURL=app.js.map