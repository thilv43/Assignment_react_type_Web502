import instance from "./Instance";
import { ProductType } from "../types/Product";
import { isAuthenticate } from "../utils/LocalStorage";
// const {token, user} = isAuthenticate();


export const list = () => {
    const url = "/products"
    return instance.get(url);
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const add = ( product: ProductType) => {
    const url = `/products/`;
    return instance.post(url, product ) 
    //     headers: {
    //         "Authorization": `Bearer ${token}`
    //     }
    // });
}

export const update = (product: ProductType) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}