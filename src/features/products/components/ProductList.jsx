function ProductList({
    products,
    onEdit,
    onDelete
}) {

    return (
        <div className="product-table-container">

            <table className="product-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>

                    {products.map((product) => (

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>{product.name}</td>

                            <td>
                                ${product.price}
                            </td>

                            <td>
                                {product.stock}
                            </td>

                            <td>

                                <button
                                    onClick={() =>
                                        onEdit(product)
                                    }
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() =>
                                        onDelete(product.id)
                                    }
                                >
                                    Eliminar
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ProductList;