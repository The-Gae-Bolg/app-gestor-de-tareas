import { 
  inquirerMenu, 
  pausa, 
  leerInput, 
  listadoDeBorrar, 
  confirmar,
  listadoDeMarcado
 } from './helpers/inquirer.js'; 
import Tareas from './models/tareas.js';
import { guardarDB, cargarDB } from './helpers/guardarArchivo.js';

const main = async () => {

  let opt = '';
  const tareas = new Tareas();
  tareas._listado = cargarDB() ?? {};

  const acciones = {
    '0': async() => {
      console.log('Bye...')
    },
    '1': async() => {
      const descripcion = await leerInput('Descripción: ');
      tareas.crearTarea(descripcion);
    },
    '2': async() => {
      tareas.listarArray().length > 0 
        ? tareas.listarTareas()
        : console.log('\nNo hay ninguna tarea creada'.red);
    },
    '3': async() => {
      tareas.listarCompletadas();
    },
    '4': async() => {
      tareas.listarIncompletas();
    },
    '5': async() => {
      const ids = await listadoDeMarcado(tareas.listarArray());
      
      ids.length > 0 && tareas.marcar( ids );
    },
    '6': async() => {

      if(tareas.listarArray().length > 0){

        const id = await listadoDeBorrar(tareas.listarArray());

        if( id !== '0'){

          const ok = await confirmar('estas seguro?');

          ok && tareas.borrarTarea(id);
        }

      } else {
        console.log('\nNo hay tareas para borrar'.red);
      }
      
    }
  }

  do{

    opt = await inquirerMenu();

    await acciones[opt]();

    guardarDB(tareas._listado);

    console.log('\n');
  
    opt !== '0' && await pausa();

  } while(opt !== '0')
}

main();