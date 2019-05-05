"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const user_1 = require("./user");
const list_1 = require("./list");
const router = new Router();
router.use(user_1.default.routes()).use(user_1.default.allowedMethods());
router.use(list_1.default.routes()).use(list_1.default.allowedMethods());
exports.default = router;
//# sourceMappingURL=route.js.map