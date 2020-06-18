import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';
import Resultado from './Resultado';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;
        const resultado = this.props.resultado;
        const mensaje = (resultado) ? 'El costo es: USD$':''; 
        const auto = this.props.datos.marca;
        if (!marca || !year || !plan) return null;
        document.getElementById(auto).classList.add('resumecar')
        //img.classList.add("resumecar")

        return( 
            <div className="resumen" >
                <p>Cotización</p>
                <h2>${resultado}</h2>
                <li>Valor total a pagar</li>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año: {year}</li>

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