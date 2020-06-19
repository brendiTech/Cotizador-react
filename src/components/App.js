import React, { Component } from 'react';
import Logo from '../images/Logo.svg';
import AMG from '../images/AMG.png';
import BMW from '../images/BMW.png';
import Tesla from '../images/Tesla.png';
import Top_view from '../images/Top_view.png'
import Header from './Header';
import Form from './Form';
import Resumen from './Resumen';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
    resultado : '',
    datos : {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    //Cada seguro tendrá una base de 2000
    let resultado = 2000;

    //Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    //Por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado ) /100

    //Mercedes 15% BMW 5% Tesla 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    //El plan básico incrementa el valor un 20%, la cobertura completa incrementa un 50%
    let incrementoPlan = obtenerPlan(plan);

    //Dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //Crear objeto para el resumen
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }

    this.setState({
      resultado : resultado,
      datos : datosAuto
    })
  }

  render() {
    const datos= this.state.datos.plan
    const message = (datos==null) ? 'Elije Marca, Año y Tipo de Seguro' : '';
    
  return (
    <div className="contenedor">
      
      <img src={Logo} alt="logo" className="logo"/>
      <Header
        titulo = "Cotizador Online de Seguros de Auto"
      />

      <div className="contenedor-formulario">
        <Form
        cotizarSeguro={this.cotizarSeguro}
        mostrarAuto={this.mostrarAuto}
        />

        <p className="alerta">
          {message}
        </p>
        
        <Resumen
          datos= {this.state.datos}
          resultado= {this.state.resultado}
        />
      </div>

      <img src={AMG} alt="Mercedes-Benz" className="auto auto-hide" id="mercedes"/>
      <img src={BMW} alt="BMW" className="auto auto-hide" id="BMW"/>
      <img src={Tesla} alt="Tesla" className="auto auto-hide" id="tesla"/>

      <div className="welcome">
        <div className="half" id="half"></div>
        <img src={Top_view} alt="auto" className="top-view" id="auto-rojo"/>
      </div>
    </div>
  );
  }
}

export default App;
