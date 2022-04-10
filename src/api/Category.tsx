import { Category } from "../types/Category";
import instance from "./Instance";

export const listCate = () => {
    const url = "/categorys";
    return instance.get(url);
}

export const listOneCate = (slug: string) => {
    const url = `/category/${slug}`;
    return instance.get(url);
}

export const editCate = (categorys: Category) => {
    const url = `/category/${categorys.slug}`;
    return instance.put(url, categorys);
}

export const removeCate = (slug: string) => {
    const url = `/category/${slug}`;
    return instance.delete(url);
}