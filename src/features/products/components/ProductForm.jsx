import { useEffect, useState } from "react";

import { validateProduct } from "../../../utils/validator";

function ProductForm({ onSubmit, productToEdit }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {

        if (productToEdit) {

            setName(productToEdit.name);
            setPrice(productToEdit.price);
            setStock(productToEdit.stock);

        } else {

            setName("");
            setPrice("");
            setStock("");

        }

        setErrors({});

    }, [productToEdit]);

    const handleSubmit = (event) => {

        event.preventDefault();

        const product = {
            name,
            price,
            stock
        };

        const validationErrors = validateProduct(product);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        onSubmit({
            name: name.trim(),
            price: Number(price),
            stock: Number(stock)
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Nombre del producto"
                value={name}
                onChange={(event) =>
                    setName(event.target.value)
                }
            />

            {errors.name && (
                <p>{errors.name}</p>
            )}

            <input
                type="number"
                min="1"
                placeholder="Precio"
                value={price}
                onChange={(event) =>
                    setPrice(event.target.value)
                }
            />

            {errors.price && (
                <p>{errors.price}</p>
            )}

            <input
                type="number"
                min="1"
                placeholder="Stock"
                value={stock}
                onChange={(event) =>
                    setStock(event.target.value)
                }
            />

            {errors.stock && (
                <p>{errors.stock}</p>
            )}

            <button type="submit">
                {productToEdit
                    ? "Actualizar producto"
                    : "Agregar producto"}
            </button>

        </form>
    );
}

export default ProductForm;