"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../../models/List");
class GetList {
    static async getList() {
        const listone = await List_1.List.findAll();
        if (listone === null) {
            return null;
        }
        else {
            return listone;
        }
    }
}
exports.GetList = GetList;
//# sourceMappingURL=getList.js.map