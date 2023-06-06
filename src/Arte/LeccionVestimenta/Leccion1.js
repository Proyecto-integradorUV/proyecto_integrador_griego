import "../../style/css/styleEmpezar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import informacion from "../../style/botones/informacion.png";
import NavbarPrincipal from "../../components/navbar2"

const LeccionVestimenta1 = () => {

    return (
        <div className="container-leccionVestimenta">
            <NavbarPrincipal/>
        </div>
    );
};

export default LeccionVestimenta1;