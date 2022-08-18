const pizzas = [
    {
        id : 1,
        nombre : "Napolitana",
        ingredientes:["Muzzarella", "Tomate", "Ajo"],
        precio: 500,
    },
    {
        id : 2,
        nombre : "Hawaiana",
        ingredientes:["Muzzarella", "Anana", "Jamon"],
        precio: 700,
    },
    {
        id : 3,
        nombre : "Rucula",
        ingredientes:["Muzzarella", "Jamon", "Rucula"],
        precio: 750,
    },
    {
        id : 4,
        nombre : "Jamon y morron",
        ingredientes:["Muzzarella", "Jamon", "Morron Verde", "Morron Rojo"],
        precio: 550,
    },
    {
        id : 5,
        nombre : "Fugazzeta",
        ingredientes:["Muzzarella", "Cebolla"],
        precio: 700,
    },
    {
        id : 6,
        nombre : "De la casa",
        ingredientes:["Muzzarella", "Cheddar", "Salchichas","Panceta"],
        precio: 900,
    }

];

a = function (){

    const idimpar = pizzas.filter((pizza) => pizza.id % 2 != 0)

    console.log(`Las pizzas con id impar son:`)
    for (pizza of idimpar) {
        console.log(`${pizza.nombre}`)
    }
}

b = function (){

    const  pizzabarata = pizzas.some ((elemento) => elemento.precio < 600);
    if (pizzabarata == true){
         console.log("Hay alguna pizza que valga menos de $600");
    }
    else{
        console.log("No hay ninguna pizza que valga menos de $600");
    }
}

c = function (){

    pizzas.forEach ((e) =>{
    console.log(`La pizza ${e.nombre} sale $${e.precio}`)
 })
}

d = function (){

    {pizzas.forEach((pizzas) =>{
    console.log ("La pizza " + pizzas.nombre + " tiene:")
         pizzas.ingredientes.forEach((ingrediente) =>{
         console.log(`-${ingrediente}`)
        })
    })
    }
}

console.log("a)")
a ();
console.log("---------------")
console.log("b)")
b ();
console.log("---------------")
console.log("c)")
c ();
console.log("---------------")
console.log("d)")
d ();

