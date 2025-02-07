import React, { useState } from "react";
import "./../../styles/luces.css";

const semaforo = () =>{
    const [color, setColor] = useState("rojo");

        //AQUI DEVERIA IR EL COLOR Y EL CSS DE LA IMAGEN.    
        return (
            <div className="semaforo">
              <div className="caja_fondo">
                <div
                  className={`rojo ${color === "rojo" ? "active" : ""}`}
                  onClick={() => setColor("rojo_brillo")}
                ></div>

                <div
                  className={`amarillo ${color === "amarillo" ? "active" : ""}`}
                  onClick={() => setColor("amarillo_brillo")}
                ></div>

                <div
                  className={`verde ${color === "verde" ? "active" : ""}`}
                  onClick={() => setColor("verde_brillo")}
                ></div>
              </div>
            </div>
          );



};

export default semaforo;