"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const addList_1 = require("../controller/list/addList");
const deleteList_1 = require("../controller/list/deleteList");
const updateList_1 = require("../controller/list/updateList");
const getList_1 = require("../controller/list/getList");
const router = new Router();
router.get('/getlist', async (ctx) => {
    // ctx.status = 500;
    const result = await getList_1.GetList.getList();
    if (result) {
        ctx.body = {
            msg: '查询成功',
            code: 0,
            data: result,
        };
    }
    else {
        ctx.body = {
            msg: '查询失败',
            code: -1,
        };
    }
});
router.post('/addList', async (ctx) => {
    // ctx.status = 500;
    const list = ctx.request.body;
    if (list.name) {
        const result = await addList_1.AddList.addList(list);
        console.log('result', result);
        if (result) {
            ctx.body = {
                msg: '添加成功',
                code: 0,
            };
        }
        else {
            ctx.body = {
                msg: '添加失败',
                code: -1,
            };
        }
    }
    else {
        ctx.body = {
            msg: '参数错误',
            data: '',
            code: -2,
        };
    }
});
router.put('/updateList', async (ctx) => {
    const olist = ctx.request.body.oList;
    const nlist = ctx.request.body.nList;
    if (olist.id && nlist.name) {
        const result = await updateList_1.UpdateList.updateList(olist, nlist);
        if (result) {
            ctx.body = {
                msg: '更新成功',
                code: 0,
            };
        }
        else {
            ctx.body = {
                msg: '更新失败',
                code: -1,
            };
        }
    }
    else {
        ctx.body = {
            message: '参数错误',
            code: -1,
        };
    }
});
router.delete('/deleteList', async (ctx) => {
    const list = ctx.request.body;
    console.log(list);
    if (list.id) {
        const result = await deleteList_1.DeleteList.deleteList(list);
        if (result) {
            ctx.body = {
                msg: '删除成功',
                code: 0,
            };
        }
        else {
            ctx.body = {
                msg: '删除失败',
                code: -1,
            };
        }
    }
    else {
        ctx.body = {
            message: '参数错误',
            code: -1,
        };
    }
});
exports.default = router;
//# sourceMappingURL=list.js.map