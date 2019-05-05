import md5 = require('blueimp-md5');
import * as jwt from 'jsonwebtoken';
import * as Router from 'koa-router';
import * as util from 'util';
import salt from '../config/salt';
import { Login } from '../controller/login';
import { Register } from '../controller/register';
const verify = util.promisify(jwt.verify);
import { secret } from '../config/token';
import { IUser } from '../interfaces/user';
import { IToken } from 'src/interfaces/token';
const router = new Router();

router.post('/login', async (ctx) => {
    // ctx.status = 500;
    const user: IUser = ctx.request.body;
    if (user && user.user && user.password) {
        user.password = md5(user.password + salt);
        const result: IUser | null = await Login.login(user);
        if (result) {
            const userToken: IToken = {
                name: user.user,
            };
            const token = `Bearer ${jwt.sign(userToken, secret, { expiresIn: '24h' })}`;
            ctx.body = {
                msg: '登录成功',
                code: 0,
                token,
                // data: JSON.stringify({ isAdmin: result.isAdmin }),
            };
        } else {
            ctx.body = {
                msg: '账号或密码错误',
                code: -1,
            };
        }
    } else {
        ctx.body = {
            msg: '参数错误',
            code: -2,
        };
    }
});
router.post('/register', async (ctx) => {
    // ctx.status = 500;
    const user: IUser = ctx.request.body;
    if (user.password && user.user) {
        user.password = md5(user.password + salt);
        const result = await Register.register(user);
        console.log('result', result);
        if (result === 'success') {
            ctx.body = {
                msg: '注册成功',
                code: 0,
                // data: token,
            };
        } else {
            ctx.body = {
                msg: '用户名已存在',
                code: -1,
            };
        }
    } else {
        ctx.body = {
            msg: '参数错误',
            data: '',
            code: -2,
        };
    }

});
router.get('/hello', async (ctx) => {

    const token = ctx.header.authorization;  // 获取jwt
    let payload: any;
    console.log(token);
    if (token && token !== 'undefined') {
        payload = await verify(token, '123'); // 解密，获取payload
        ctx.body = {
            payload,
        };
    } else {
        ctx.body = {
            message: 'token 错误',
            code: -1,
        };
    }
});
export default router;
