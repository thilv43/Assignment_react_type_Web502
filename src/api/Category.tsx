import { Category } from "../types/Category";
import instance from "./Instance";

export const listCate = () => {
    const url = "/categorys";
    return instance.get(url);
}

export const listOneCate = (slug: string | undefined) => {
    const url = `/category/${slug}`;
    return instance.get(url);
}
export const addCate = (categorys: Category) => {
    const url = `category/${categorys.slug}`;
    return instance.post(url, categorys)
}

export const updateCate = (categorys: Category) => {
    const url = `/category/${categorys.slug}`;
    return instance.put(url, categorys);
}

export const removeCate = (slug: string | undefined) => {
    const url = `/category/${slug}`;
    return instance.delete(url);
}