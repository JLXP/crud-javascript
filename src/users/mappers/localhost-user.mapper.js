import { User } from "../models/user";

export const localhostUserModal = (localhostUser) => {

    /**
     * @param{Like<User>} localhostUser
     * @returns {User}
     */
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
    } = localhostUser

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    });
}