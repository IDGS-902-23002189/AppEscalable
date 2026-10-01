
function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-brand">

                <div className="navbar-logo">
                    P
                </div>

                <div>
                    <h2>Productos</h2>
                    <span>Gestión de productos</span>
                </div>

            </div>

            <div className="navbar-section">
                <span className="navbar-section-title">
                    Módulo actual
                </span>

                <span className="navbar-section-name">
                    Productos
                </span>
            </div>

            <div className="navbar-user">

                <div className="user-avatar">
                    A
                </div>

                <div className="user-info">
                    <strong>Administrador</strong>
                    <span>Usuario</span>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;

