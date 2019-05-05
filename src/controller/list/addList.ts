import { IList } from '../../interfaces/list';
import { List } from '../../models/List';
export class AddList {
    public static async addList(json: IList): Promise<IList | null> {
        const listone: IList = await List.create<IList>(json);
        if (listone === null) {
            return null;
        } else {
            return listone;
        }
    }
}
