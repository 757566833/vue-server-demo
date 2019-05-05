import { IList } from '../../interfaces/list';
import { List } from '../../models/List';
export class UpdateList {
    public static async updateList(olist: IList, nlist: IList): Promise<[number, List[]] | null> {
        const listone: [number, List[]] = await List.update(nlist, { where: { ...olist } });
        if (listone === null) {
            return null;
        } else {
            return listone;
        }
    }
}
