import { useState } from "react";

import ProductForm from "../../features/products/components/ProductForm";
import ProductList from "../../features/products/components/ProductList";

import useProducts from "../../features/products/hooks/useProducts";


function Products() {

    const {
        products,
        addProduct,
        editProduct,
        removeProduct
    } = useProducts();

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [productToEdit, setProductToEdit] = useState(null);

    const handleSave = async (product) => {

        if (productToEdit) {

            await editProduct(
                productToEdit.id,
                product
            );

            setProductToEdit(null);

        } else {

            await addProduct(product);
        }
    };

    const handleEdit = (product) => {
        setProductToEdit(product);
    };

    const handleDelete = async (id) => {
        await removeProduct(id);
    };

    return (
        <main>

            <h1>Módulo de Productos</h1>

            <ProductForm
                onSubmit={handleSave}
                productToEdit={productToEdit}
            />

            <ProductList
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </main>
    );
}

export default Products;