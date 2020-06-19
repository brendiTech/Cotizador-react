import React, {Component} from 'react';
import information from '../images/information.svg';
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

        //Mostrar el elemento Resumen si está renderizado
        var car = document.getElementsByClassName("resumen")
        if(car[0]){
        car[0].classList.remove("hide");}
    }

    mostrarAuto = (e) => {
        e.preventDefault();
        var select = document.getElementById("marca").value;
        console.log(select)

        //Muestra el auto seleccionado o ninguno (caso que ocurre apenas se carga la página)
        var autohide = document.getElementsByClassName("auto-hide")
        if (autohide.length===3){
            setTimeout(function() {
                document.getElementById(select).classList.toggle('auto-hide');
            }, 1000);
        }else{
            document.getElementById(select).classList.toggle('auto-hide');
        }
        
        //Animación luego de seleccionar el primer auto
        const autos = document.getElementsByClassName('auto');
        document.getElementById("auto-rojo").classList.add('arranca')
        document.getElementById("half").classList.add('slide')

        //Esconder los autos que no son seleccionados
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].id!==select) {
                autos[i].classList.add("auto-hide")
            }
        }
        //Esconder el elemento Resumen si se cambia el select
        var car = document.getElementsByClassName("resumen")
        if(car[0]){
            car[0].classList.add("hide");
        }

        document.getElementById(select).classList.remove('resumecar')
    }

    render(){

        return (
            <form className="cotizar-auto" id ="myForm" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef} id="marca" onChange={this.mostrarAuto}>
                        <option hidden value="" className="optn">Selecciona una marca</option>
                        <option value="mercedes" className="optn">Mercedes Benz</option>
                        <option value="BMW" className="optn">BMW</option>
                        <option value="tesla" className="optn">Tesla</option>
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
                            <input type="radio" ref={this.planBasicoRef} name="plan" value="basico" />Plan Básico
                        </label>
                        <img src={information} alt="informacion" className="info"/>
                    </div>
                    <div className="option">
                        <label>
                            <input type="radio" ref={this.planCompletoRef} name="plan" value="completo" />Plan Premium
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