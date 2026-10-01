import { useEffect, useState } from "react";

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../services/productService";

function useProducts() {

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {

        const data = await getProducts();

        setProducts(data);
    };

    const addProduct = async (product) => {

        await createProduct(product);

        await loadProducts();
    };

    const editProduct = async (id, product) => {

        await updateProduct(id, product);

        await loadProducts();
    };

    const removeProduct = async (id) => {

        await deleteProduct(id);

        await loadProducts();
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return {
        products,
        addProduct,
        editProduct,
        removeProduct
    };
}

export default useProducts;