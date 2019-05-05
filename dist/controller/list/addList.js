"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../../models/List");
class AddList {
    static async addList(json) {
        const listone = await List_1.List.create(json);
        if (listone === null) {
            return null;
        }
        else {
            return listone;
        }
    }
}
exports.AddList = AddList;
//# sourceMappingURL=addList.js.map