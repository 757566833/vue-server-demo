import { IList } from '../../interfaces/list';
import { List } from '../../models/List';
export class DeleteList {
    public static async deleteList(json: IList): Promise<number | null> {
        const listone: number = await List.destroy({ where: { ...json } });
        if (listone === null) {
            return null;
        } else {
            return listone;
        }
    }
}
