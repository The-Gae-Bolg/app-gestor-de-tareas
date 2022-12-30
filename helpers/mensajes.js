require('colors');

const mostrarMenu = () => {

  return new Promise(reject => {
    console.clear();

    console.log(`==========================`.green);
    console.log(`=====Elige una opción=====`.green);
    console.log(`==========================\n`.green);

    console.log(`${'1.'.green} Crear nueva tarea`);
    console.log(`${'2.'.green} Mostrar todas las tareas`);
    console.log(`${'3.'.green} Mostrar tareas completadas`);
    console.log(`${'4.'.green} Mostrar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tareas`);
    console.log(`${'0.'.green} Salir\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt) => {
      readline.close();
      reject(opt);
    });
  })

}

const pause = () => {

  return new Promise(reject => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`\nPrecione ${'Enter'.green} para continuar...\n`, (opt) =>{
      readline.close();
      reject(opt);
    })
  })
}

module.exports = {
  mostrarMenu,
  pause
}