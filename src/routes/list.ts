import * as Router from 'koa-router';
import { AddList } from '../controller/list/addList';
import { DeleteList } from '../controller/list/deleteList';
import { UpdateList } from '../controller/list/updateList';
import { GetList } from '../controller/list/getList';
import { IList } from '../interfaces/list';
const router = new Router();

router.get('/getlist', async (ctx) => {
    // ctx.status = 500;
    const result: IList[] = await GetList.getList();
    if (result) {
        ctx.body = {
            msg: '查询成功',
            code: 0,
            data: result,
        };
    } else {
        ctx.body = {
            msg: '查询失败',
            code: -1,
        };
    }
});
router.post('/addList', async (ctx) => {
    // ctx.status = 500;
    const list: IList = ctx.request.body;
    if (list.name) {
        const result = await AddList.addList(list);
        console.log('result', result);
        if (result) {
            ctx.body = {
                msg: '添加成功',
                code: 0,
            };
        } else {
            ctx.body = {
                msg: '添加失败',
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
router.put('/updateList', async (ctx) => {
    const olist: IList = ctx.request.body.oList;
    const nlist: IList = ctx.request.body.nList;
    if (olist.id && nlist.name) {
        const result = await UpdateList.updateList(olist, nlist);
        if (result) {
            ctx.body = {
                msg: '更新成功',
                code: 0,
            };
        } else {
            ctx.body = {
                msg: '更新失败',
                code: -1,
            };
        }
    } else {
        ctx.body = {
            message: '参数错误',
            code: -1,
        };
    }
});
router.delete('/deleteList', async (ctx) => {

    const list: IList = ctx.request.body;
    console.log(list);
    if (list.id) {
        const result = await DeleteList.deleteList(list);
        if (result) {
            ctx.body = {
                msg: '删除成功',
                code: 0,
            };
        } else {
            ctx.body = {
                msg: '删除失败',
                code: -1,
            };
        }
    } else {
        ctx.body = {
            message: '参数错误',
            code: -1,
        };
    }
});
export default router;
