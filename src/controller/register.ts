import { IUser } from '../interfaces/user';
import { User } from '../models/User';
export class Register {
    public static async register(json: IUser): Promise<string> {
        const finduserResult = await User.findOne({ where: json });
        if (finduserResult === null) {
            await User.create<IUser>(json);
            return new Promise((resolve) => { resolve('success'); });
        } else {
            return new Promise((resolve) => { resolve('failure'); });
        }
    }
}
