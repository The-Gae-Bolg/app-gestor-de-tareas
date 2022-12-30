import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Qué desea hacer?'.green,
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear nueva tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Mostrar todas las tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Mostrar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Mostrar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tareas`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir\n`
      }
    ]
  }
];

const pausaText = [
  {
    type: 'input',
    name: 'enter',
    message: `Precione ${'Enter'.green} para continuar...\n`
  }
];

const inquirerMenu = async () => {

  console.clear();

  console.log(`==========================`.green);
  console.log(`     Elige una opción     `.green);
  console.log(`==========================\n`.green);

  const { opcion } =  await inquirer.prompt(preguntas);

  return opcion;

};

const pausa = async () => {
  await inquirer.prompt(pausaText);
}

const leerInput = async ( message ) => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ){
        return value.length === 0
          ? 'Por favor ingrese un valor'
          : true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  
  return desc;
};

const listadoDeBorrar = async ( tareas ) => {

  const choices = tareas.map(( tarea, index) => {
    return {
      value: tarea.id,
      name: `${((index + 1) + '.').green} ${tarea.descripcion}`
    }
  });

  choices.unshift({
    value: '0',
    name: 'Cancelar'.green
  });

  const question = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    }
  ];

  const { id } = await inquirer.prompt(question);
  
  return id; 
  
};

const confirmar = async ( message ) => {

  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(question);
  
  return ok; 
  
};

const listadoDeMarcado = async ( tareas ) => {

  const choices = tareas.map(( tarea, index) => {
    return {
      value: tarea.id,
      name: `${((index + 1) + '.').green} ${tarea.descripcion}`,
      checked: tarea.completado ? true : false
    }
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccionar',
      choices,
    }
  ];

  const { ids } = await inquirer.prompt(question);
  
  return ids; 
  
};

export {
  inquirerMenu,
  pausa,
  leerInput,
  listadoDeBorrar,
  confirmar,
  listadoDeMarcado
}