import React, { Component } from 'react';
import Logo from '../Logo.svg';
import AMG from '../AMG.png';
import Header from './Header';
import Form from './Form';
import Resumen from './Resumen';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resultado from './Resultado';

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

    //Americano 15% Asiático 5% Europeo 30% de incremento al valor actual
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
  return (
    <div className="contenedor">

      <img src={Logo} alt="logo" className="logo"/>
      <Header
        titulo = "Cotizador Online de Seguros de Auto"
      />

      <div className="contenedor-formulario">
        <Form
        cotizarSeguro={this.cotizarSeguro}
        />

        <Resumen
        datos= {this.state.datos}
        />
        <Resultado
          resultado= {this.state.resultado}
        />
      </div>

      <img src={AMG} alt="auto" className="auto"/>

    </div>
  );
  }
}

export default App;
