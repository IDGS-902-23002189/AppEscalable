import productsData from "../data/productsData";

let products = [...productsData];

export const getProducts = () => {
    return Promise.resolve([...products]);
};

export const createProduct = (product) => {

    const newProduct = {
        id: products.length + 1,
        ...product
    };

    products = [...products, newProduct];

    return Promise.resolve(newProduct);
};

export const updateProduct = (id, productData) => {

    products = products.map((product) =>
        product.id === id
            ? {
                ...product,
                ...productData
            }
            : product
    );

    return Promise.resolve(
        products.find((product) => product.id === id)
    );
};

export const deleteProduct = (id) => {

    products = products.filter(
        (product) => product.id !== id
    );

    return Promise.resolve(true);
};