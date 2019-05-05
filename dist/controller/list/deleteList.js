"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../../models/List");
class DeleteList {
    static async deleteList(json) {
        const listone = await List_1.List.destroy({ where: Object.assign({}, json) });
        if (listone === null) {
            return null;
        }
        else {
            return listone;
        }
    }
}
exports.DeleteList = DeleteList;
//# sourceMappingURL=deleteList.js.map