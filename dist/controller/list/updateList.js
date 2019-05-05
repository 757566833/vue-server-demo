"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../../models/List");
class UpdateList {
    static async updateList(olist, nlist) {
        const listone = await List_1.List.update(nlist, { where: Object.assign({}, olist) });
        if (listone === null) {
            return null;
        }
        else {
            return listone;
        }
    }
}
exports.UpdateList = UpdateList;
//# sourceMappingURL=updateList.js.map