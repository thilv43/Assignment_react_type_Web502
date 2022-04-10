import { User } from "../types/Users";
import instance from "./Instance";

export const signup = (user: User | undefined) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: User | undefined) => {
    const url = `/signin`;
    return instance.post(url, user);
}