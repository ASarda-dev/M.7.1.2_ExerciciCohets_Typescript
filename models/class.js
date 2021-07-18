"use strict";
class Rocket {
    constructor(codigo) {
        this.propulsores = new Array();
        this.codigo = codigo;
    }
    addPropulsor(propulsor) {
        this.propulsores.push(propulsor);
    }
}
class Propulsor {
    constructor(potenciaMax) {
        this.potenciaMax = potenciaMax;
        this.potenciaActual = 0;
    }
}
