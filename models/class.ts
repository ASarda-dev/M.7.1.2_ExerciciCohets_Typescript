class Rocket {
    codigo: string;
    propulsores: Propulsor[] = new Array();
  
    constructor(codigo: string) {
      this.codigo = codigo;
    }
  
    addPropulsor(propulsor: Propulsor): void {
      this.propulsores.push(propulsor);
    }
  }
class Propulsor {
    potenciaMax: number;
    potenciaActual: number;
  
    constructor(potenciaMax: number) {
      this.potenciaMax = potenciaMax;
      this.potenciaActual = 0;
    }
  }