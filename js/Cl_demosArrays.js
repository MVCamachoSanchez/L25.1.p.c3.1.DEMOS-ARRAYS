export default class Cl_demosArrays {

    ejemploCreacion() {
        let numeros = [1, 2, 3, 4, 5];
        let booleanos = [true, false, true];

        let strings = ["Buenos", "dias"];
        let libros = [
            { nombre: "Veronica decide morir", paginas: 19 },
            { nombre: "Crepusculo", paginas: 20 },
            { nombre: "Padre rico, Padre pobre", paginas: 17 },
        ];

        alert(`
            ===> Tipos de datos primitivos:
            numeros[2] = ${numeros[2]}
            booleanos[1] = ${booleanos[1]}
            strings[0] = ${strings[0]}
            
            ===> Tipos de datos objetos:
            libros[0].nombre = ${libros[0].nombre}
            libros[1].paginas = ${libros[1].paginas}
            `);
    }

    ejemploAcceso1() {
        let perros = [
            { raza: "Pincher", color: "marron" },
            { raza: "Rottweiler", color: "negro" },
            { raza: "Cocker", color: "blanco" },
        ];
        alert(`
            ===> Acceder a una apropiedad de un objeto:
            Nombre de la primera raza de perros:
            perros[0].raza = ${perros[0].raza}
            
            ===> Acceder a una propiedad usando notación corchetes:
            Color del primer Perro:
            perros[0]["color"] = ${perros[0]["color"]}
            `);
    }

    ejemploAcceso2() {
        let decimales = [0.5, 1.5, 2.4];

        let vecinos = [
            { nombre: "Lenis", edad: 56, hijos: ["Jose", "Adriana"] },
            { nombre: "Rosanna", edad: 45, hijos: ["Maria", "Fabiola", "Luisana"] },
            { nombre: "Gabriela", edad: 60, hijos: ["Sebastian", "Rachi"] },
        ];
        alert(`
            ===> Tipos de datos primitivos:
            decimales[2] = ${decimales[2]}
            
            ===> Tipos de datos objetos:
            Acceder al nombre del primer vecino:
            vecinos[0].nombre = ${vecinos[0].nombre}
            
            Acceder al segundo hijo del segundo vecino:
            vecinos[1].hijos[1] = ${vecinos[1].hijos[1]}
            `);
    }

    ejemploPush() {
        let decimales = [0.5, 1.5, 2.4];
        alert(`
            ===> Antes del push:
            decimales = ${decimales}
            `);
        decimales.push(3.5);
        alert(`
                ===> Despues de decimales.push(3.5):
                decimales = ${decimales}
                `);
        decimales.push(4.5, 6.5)
        alert(`
            ===> Despues de decimales.push(4.5, 6.5)
            decimales = ${decimales}
            `);
    }

    ejemploUnshift() {

        let utenciliosCocina = ["cuchara", "tenedor", "cuchillo"];
        alert(`
            ===> Antes del unshift:
            utenciliosCocina = ${utenciliosCocina}
            `);
        utenciliosCocina.unshift("espatula");
        alert(`
            ===> Despues del utenciliosCocina.unshift("espatula"):
            utenciliosCocina = ${utenciliosCocina}
            `);
        utenciliosCocina.unshift("sarten", "olla");
        alert(`
            ===> Despues del utenciliosCocina.unshift("sarten", "olla")
            utenciliosCocina = ${utenciliosCocina}
            `);
    }

    ejemploPop() {
        let vasos = ["copa", "taza", "vaso largo"];
        alert(`
            ===> Array de tipos de vasos: 
            Antes del pop
            vaos = ${vasos}
            `);
        let ultimoVaso = vasos.pop();
        alert(`
                ===> Despues de vasos.pop()
                vasos = ${vasos}
                El ultimo vaso fue ${ultimoVaso}
                `);

        let electrodomesticos = [
            { electrodomestico: "Nevera", marca: "Condesa" },
            { electrodomestico: "Lavadora", marca: "haier" },
            { electrodomestico: "Televisor", marca: "Hyundai" },
        ];
        alert(`
            ===> Array de electrodomesticos:
            Antes del pop:
            electrodomesticos = ${JSON.stringify(electrodomesticos)}
            `);
        let ultimoElectrodomestico = electrodomesticos.pop();
        alert(`
            ===> Despues de electrodomesticos.pop()
            electrodomesticos = ${JSON.stringify(electrodomesticos)}
            El electrodomestico eliminado fue ${JSON.stringify(ultimoElectrodomestico)}
            `);
    }
}