export const validateProduct = (product) => {

    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre del producto es obligatorio";
    }

    if (product.price === "" || product.price === null) {
        errors.price = "El precio es obligatorio";
    } else if (Number(product.price) < 0) {
        errors.price = "El precio no puede ser negativo";
    }

    if (product.stock === "" || product.stock === null) {
        errors.stock = "El stock es obligatorio";
    } else if (Number(product.stock) < 0) {
        errors.stock = "El stock no puede ser negativo";
    }

    return errors;
};