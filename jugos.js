//Mezcla de jugos

//1.Menu

function timeToMixJuice(jugo){
    switch(jugo){
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3.0;
        case 'All or nothing':
            return 5.0;
        default:
            return 2.5;
    }
}

//2.Reponer suministro de rodajas de lima

function limesToCut(necesario_rodajas){
    const tamanioLimas = {
        "pequeña": 6,
        "mediana": 8,
        "grande": 10
    };
    
    let cantidad_rodajas = 0;
    let limas = 0;

    for (let i = 0; i < limasInventario.length; i++) {
        const tamanio = limasInventario[i]; //Acceder al tamaño de lima en el inventario
        cantidad_rodajas += tamanioLimas[tamanio];

        if (cantidad_rodajas >= necesario_rodajas) {
            limas = i + 1; 
            break;
        }
    }

    return limas;
}

//3.Terminar el turno

function remainingOrders(minutosRestantes, pedidos) {
    let pedidosNoPreparados = [];
    
    for (let i = 0; i < pedidos.length; i++) {
        const tiempoPreparacion = timeToMixJuice(pedidos[i]);
        console.log('Tiempo de preparacion de ', pedidos[i],' es: ',timeToMixJuice(pedidos[i]))

        if (minutosRestantes < tiempoPreparacion) {
             pedidosNoPreparados.push(pedidos[i]);
        } else {
            minutosRestantes -= tiempoPreparacion;
        }
    }
    
    return pedidosNoPreparados;
}

//Valores de rodajas por limas
const limasInventario = ['pequeña', 'mediana', 'grande', 'pequeña', 'grande'];
const necesario_rodajas = 22; // Cambiado a constante
//Turno restante
const minutosRestantes = 10;
const pedidos = ['Pure Strawberry Joy', 'Energizer', 'Special Offer', 'Green Garden', 'All or Nothing', 'All or Nothing'];//Pedido

console.log('Cantidad de limas a cortar:', limesToCut(necesario_rodajas), 'limas\n');
console.log('\nPedidos restantes al final del turno:', remainingOrders(minutosRestantes, pedidos));

