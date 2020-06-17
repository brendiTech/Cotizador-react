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
            <div className="resumen">
                <h2>Cotización</h2>
                <li>USD${resultado}</li>
                <li>Valor total a pagar</li>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>

                {/* { <TransitionGroup component="span" className="resultado">
                    <CSSTransition 
                    in={mensaje}
                        className="resultado" 
                        key={resultado}
                        timeout={{enter : 300, exit : 300}}
                        >
                            <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>} */}
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