export default class Cl_demosArrays {

    ejemploCreacion() {
        let strings = ["Buenos", "dias"];
        let libros = [
            { nombre: "Veronika Decide Morir", paginas: 240 },
            { nombre: "Crepúsculo", paginas: 512 },
            { nombre: "Padre Rico, Padre Pobre", paginas: 320 },
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

        let utensiliosCocina = ["cuchara", "tenedor", "cuchillo"];
        alert(`
            ===> Antes del unshift:
            utenciliosCocina = ${utensiliosCocina}
            `);
        utensiliosCocina.unshift("espatula");
        alert(`
            ===> Despues del utenciliosCocina.unshift("espatula"):
            utenciliosCocina = ${utensiliosCocina}
            `);
        utensiliosCocina.unshift("sarten", "olla");
        alert(`
            ===> Despues del utenciliosCocina.unshift("sarten", "olla")
            utenciliosCocina = ${utensiliosCocina}
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

    ejemploShift() {
        let libros = [
            { nombre: "Veronica Decide Morir", paginas: 240 },
            { nombre: "Crepusculo", paginas: 512 },
            { nombre: "Padrre Rico, Padre Pobre", paginas: 320 },
        ];
        alert(`
            ===> Array de libros:
            Antes del shift
            libros = ${JSON.stringify(libros)}
            `);
        let primerLibro = libros.shift();
        alert(`
            ===> Despues del shift:
            libros = ${JSON.stringify(libros)}
            El libro eliminado  fue: ${JSON.stringify(primerLibro)}
            `);
    }

    ejemploSplice() {
        //Array de pinturas de uñas 
        let pinturasUñas = [
            { marca: "Valmy", color: "Azul" },
            { marca: "Revlon", color: "Vino  tinto" },
            { marca: "Masglo", color: "Blanco" },
            { marca: "Lay Pro", color: "Transparente" },
        ];
        alert(`
            ===> Array de objetos (pinturas de uñas):
            Antes del splice:
            pinturasUñas = ${JSON.stringify(pinturasUñas)}
            `);
        let eliminados = pinturasUñas.splice(1, 2, { marca: "Valmy", color: "negro" });
        alert(`
            ===> Luego del splice:
            pinturasUñas = ${JSON.stringify(pinturasUñas)}
            Elemntos eliminados: ${JSON.stringify(eliminados)}
            `);
    }

    metodoMap1() {
        //Ejemplo con objetos
        const perros = [
            { raza: "Pincher", color: "marron" },
            { raza: "Rottweiler", color: "negro" },
            { raza: "Cocker", color: "blanco" },
        ];
        const raza = perros.map((perros) => perros.raza);
        alert(`Ejemplo con objetos:
            perros = ${JSON.stringify(perros)}
            raza: ${raza}
            `);
    }

    metodoMap2() {
        const viveres = [
            { vivere: "Pasta", cantidadPaquetes: 2 },
            { vivere: "Arroz", cantidadPaquetes: 3 },
            { vivere: "Harina", cantidadPaquetes: 4 },
        ];
        const viveresConCantidadIncrementada = viveres.map((viveres) => ({
            ...viveres,
            cantidadPaquetes: viveres.cantidadPaquetes + 1,
        })
        );
        alert(`
            ===> Ejemplo metodo map()
            viveres = ${JSON.stringify(viveres)}
            viveresConCantidadIncrementada = ${JSON.stringify(viveresConCantidadIncrementada)}
        `);
    }

    ciclosTradicionales() {
        //Ciclo for
        let vasos = ["copa", "taza", "vaso largo"];
        //Usamos un  bucle for para recorrer el array
        for (let i = 0; i < vasos.length; i++) {
            alert(`
                CICLO for: vasos[${i}] = ${vasos[i]}
                `);
        }

        //Ciclo while
        let utensiliosCocina = ["cuchara", "tenedor", "cuchillo"];
        let i = 0;
        while (i < utensiliosCocina.length) {
            alert(`
                CICLO while: utensiliosCocina[${i}] = ${utensiliosCocina[i]}
            `);
            i++;
        }

        //Ciclo do-while
        let array = ["copa", "taza", "vaso largo"];
        i = 0;
        do {
            alert(`
                CICLO  do-while: array[${i}] = ${array[i]}
                `);
            i++;
        } while (i < array.length);
    }

    metodoForEach() {
        //Macardores de colores
        const macradoresColores = ["azul", "morado", "rosado", "verde", "amarillo"];
        macradoresColores.forEach(function (item) {
            alert(`
                Marcadores de colores:
                Recorrido con función tradicional: ${item}`);
        });

        //Using arrow funtion
        macradoresColores.forEach((item) =>
            alert(`
            Marcadores de colores:    
            Recorrido con función flecha: ${item}`)
        );
    }
}