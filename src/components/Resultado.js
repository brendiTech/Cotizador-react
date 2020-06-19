import React,{Component} from 'react';
class Resultado extends Component {

    render() {
        const resultado = this.props.resultado;

        return (
            <div className="gran-total">
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
        );
    }
}


export default Resultado