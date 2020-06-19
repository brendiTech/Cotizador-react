import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';
import close from '../close.svg'


class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;
        const resultado = this.props.resultado;
        const mensaje = (resultado) ? 'El costo es: USD$':''; 
        const auto = this.props.datos.marca;
        if (!marca || !year || !plan) return null;
        document.getElementById(auto).classList.add('resumecar')


        return( 
            <div className="resumen" >
                <img src={close} alt="close" className="btn-close"/>
                <h1>Cotización</h1>
                <h2>${resultado}</h2>
                <li className="colorline">Valor total a pagar</li>
                <li>Marca: <span>{primeraMayuscula(marca)}</span></li>
                <li>Plan: <span>{primeraMayuscula(plan)}</span></li>
                <li>Año: <span>{year}</span></li>

            </div>
        )
    }
    render () {
        return(
            <div>
                { this.mostrarResumen() }

            </div>
        )
    }

}

export default Resumen;