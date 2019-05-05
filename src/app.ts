import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as jwtKoa from 'koa-jwt';
import * as cors from 'koa2-cors';
import router from './routes/route';
import { Sequelize } from 'sequelize-typescript';
// import { secret } from './config/token';
// import router from './routes/route';
// console.log(secret);

// tslint:disable-next-line:no-unused-expression
new Sequelize({
    operatorsAliases: true,
    host: '192.168.1.21',
    port: 3356,
    database: 'test_db',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
    // storage: ':memory:',
    define: {
        timestamps: true, // 开启时间戳 create_at delete_at update_at
        paranoid: true, // 开启假删除
        underscored: true, // 下划线
        charset: 'utf8',
        freezeTableName: true, // 固定表名为单数  默认表名是xxxs
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    timezone: '+08:00', // 更改为北京时区
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
app.use(router.routes()).use(router.allowedMethods());
app.listen(10002);
