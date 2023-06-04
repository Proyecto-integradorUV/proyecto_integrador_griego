import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";

const NavbarHome = () => {
    return (
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#E07A5F' }}>
            <div class="container-fluid">
                <ul className="navbarList1">
                    <li className="navbarItem1">
                        <a href="/SignIn" className="navbar-home">
                            Iniciar sesión
                        </a>
                    </li>
                    <li className="navbarItem1">
                        <a href="/SignUp" className="navbar-home">
                            Registrarse
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default NavbarHome;