import React from "react";
import { Loading } from "../components/Lib"

const Modal = (props) => {

    return(
        <div className="modal">
        <div className="contenedor-modal">
            <div className="titulo-modal">
                <div className="img-titulo">{props.card.name}
                {props.card.cost}</div>
            </div>
            <div className="modal-img">
            <img src={`/Sprites/CardArt/${props.card.art}`} className="foto-carta"/>
            </div>
            <div class="data-container">
                <div className="description">

                </div>
                <div className="atributos" >

                </div>
                
            </div>
            <div>
                <button>
                    verde
                </button>
                <button>
                    rojo    
                </button>
     
            </div>


        </div>
    </div>    
        
    )
}

export default Modal;





