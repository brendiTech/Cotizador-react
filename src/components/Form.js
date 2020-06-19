import React, {Component} from 'react';
import information from '../information.svg';
class Form extends Component{

    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();

    cotizarSeguro = (e) => {
        e.preventDefault();
        var plan 
        if(this.planBasicoRef.current.checked){
            plan = 'basico'
        } else{
            if(this.planCompletoRef.current.checked){
                plan = 'completo'
            } else{
                plan = null;
            }
        }
       

        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        this.props.cotizarSeguro(infoAuto);
        var car = document.getElementsByClassName("resumen")
        if(car[0]){
        car[0].classList.remove("hide");}
        
    }

    mostrarAuto = (e) => {
        e.preventDefault();
        var select = document.getElementById("marca").value;
        console.log(select)
        
        var autohide = document.getElementsByClassName("auto-hide")
        if (autohide.length==3){
            setTimeout(function() {
                document.getElementById(select).classList.toggle('auto-hide');
            }, 1000);
        }else{
            document.getElementById(select).classList.toggle('auto-hide');
        }
  
        const autos = document.getElementsByClassName('auto');

        document.getElementById("auto-rojo").classList.add('arranca')
        document.getElementById("half").classList.add('slide')

        for (let i = 0; i < autos.length; i++) {
            console.log(i)
            if (autos[i].id!==select) {
                autos[i].classList.add("auto-hide")
            }
        }

        var car = document.getElementsByClassName("resumen")
        if(car[0]){
        car[0].classList.add("hide");}
        document.getElementById(select).classList.remove('resumecar')
    }

    arrancar = (e) => {
        e.preventDefault();

    }

    render(){

        return (
            <form className="cotizar-auto" id ="myForm" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef} id="marca" onChange={this.mostrarAuto}>
                        <option hidden value="">Selecciona una marca</option>
                        <option value="mercedes">Mercedes Benz</option>
                        <option value="bmw">BWM</option>
                        <option value="tesla">Tesla</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option hidden value="">Selecciona un año</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">20011</option>
                        <option value="2010">2010</option>
                    </select>
                </div>
                <div className="campo-radio">
                    <div className="option">
                        <label>
                            <input type="radio" ref={this.planBasicoRef} name="plan" value="basico"  />Plan Básico
                        </label>
                        <img src={information} alt="informacion" className="info"/>
                    </div>
                    <div className="option">
                        <label>
                            <input type="radio" ref={this.planCompletoRef} name="plan" value="completo" />Plan Compelto
                            
                        </label>
                        <img src={information} alt="informacion" className="info"/>
                    </div>
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }
}

export default Form;