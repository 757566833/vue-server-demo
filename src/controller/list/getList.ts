import { IList } from '../../interfaces/list';
import { List } from '../../models/List';
export class GetList {
    public static async getList(): Promise<IList[] | null> {
        const listone: IList[] = await List.findAll();
        if (listone === null) {
            return null;
        } else {
            return listone;
        }
    }
}
