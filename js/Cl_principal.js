import Cl_demosArrays from "./Cl_demosArrays.js";

export default class Cl_principal {
    constructor() {
        this.salida = document.getElementById("salida");
        this.salida.innerHTML = this.opciones();
        this.opcion = document.getElementById("opcion");
        this.demos = new Cl_demosArrays();
        this.opcion.onclick = () => this.mostrarDemo();
    }

    opciones() {
        return `
        A. Ejemplo creaqción  de arrays<br>
        B. Ejemplo acceso de elementos<br>
        C. Ejemplo de acceso de elementos<br>
        D. Ejemplo push<br>
        E. Ejemplo unshift<br>
        F. Ejemplo pop<br>
        G. Ejemplo shift<br>
        H. Ejemplo splice<br>
        I. Ejemplo map()-1- <br>
        J. Ejemplo map()-2- <br>
        K. Ejemplo con ciclo tradicionales<br>
        L. Ejemplo con forEach<br> 
        `
    }

    mostrarDemo() {
        let opc = prompt("Seleccione una opción").toUpperCase();

        switch (opc) {
            case "A":
                this.demos.ejemploCreacion();
                break;
            case "B":
                this.demos.ejemploAcceso1();
                break;
            case "C":
                this.demos.ejemploAcceso2();
                break;
            case "D":
                this.demos.ejemploPush();
                break;
            case "E":
                this.demos.ejemploUnshift();
                break;
            case "F":
                this.demos.ejemploPop();
                break;
            case "G":
                this.demos.ejemploShift();
                break;
            case "H":
                this.demos.ejemploSplice();
                break;
            case "I":
                this.demos.metodoMap1();
                break;
            case "J":
                this.demos.metodoMap2();
                break;
            case "K":
                this.demos.ciclosTradicionales();
                break;
            case "L":
                this.demos.metodoForEach();
                break;
            default:
                alert(`Opción no disponible`);
        }
    }
}