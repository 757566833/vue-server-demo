import { IUser } from '../interfaces/user';
import { User } from '../models/User';
export class Login {
    public static async login(json: IUser): Promise<IUser | null> {
        const userone: IUser = await User.findOne({ where: json });
        if (userone === null) {
            return null;
        } else {
            return userone;
        }
    }
}
