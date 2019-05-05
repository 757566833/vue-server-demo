import * as Router from 'koa-router';
import userRouter from './user';
import listRouter from './list';

const router = new Router();
router.use(userRouter.routes()).use(userRouter.allowedMethods());
router.use(listRouter.routes()).use(listRouter.allowedMethods());
export default router;
