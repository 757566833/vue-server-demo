import * as Router from 'koa-router';
import userRouter from './user';

const router = new Router();
router.use(userRouter.routes()).use(userRouter.allowedMethods());
export default router;
