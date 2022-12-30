import Tarea from './tarea.js';

export default class Tareas {

  constructor() {
    this._listado = {};
  }

  crearTarea(descripcion = '') {
    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;
  }

  listarTareas(){
    Object.keys(this._listado).map((key, index) => {
      console.log(`${((index + 1) + '.').green} ${this._listado[key]['descripcion']}${' :: Estado ->'.blue} ${this._listado[key]['completado'] ? 'Completada'.green : 'Pendiente'.red}`);
    })
  }

  listarCompletadas(){
    let i = 1;
    const arrAux = Object.keys(this._listado).filter((key) => {
      if(this._listado[key]['completado']) {
        console.log(`${( i + '.').green} ${this._listado[key]['descripcion']}${' :: Creado ->'.blue} ${this._listado[key]['fecha']}`);
        i++;
        return key;
      } 
    })

    if(arrAux.length <= 0){
      console.log('\nNo hay tareas completadas para mostrar'.red);
    }
  }

  listarIncompletas(){
    let i = 1;
    const arrAux = Object.keys(this._listado).filter((key) => {
      if(!this._listado[key]['completado']) {
        console.log(`${(i + '.').green} ${this._listado[key]['descripcion']}${' :: Creado ->'.blue} ${this._listado[key]['fecha']}`);
        i++;
        return key;
      } 
    })

    if(arrAux.length <= 0){
      console.log('\nNo hay tareas incompletas para mostrar'.red);
    }
  }

  listarArray(){
    return Object.keys(this._listado).map( tarea => this._listado[tarea]);
  }

  marcar( ids ){
    Object.keys(this._listado).forEach( tarea => {
      if( ids.includes( tarea ) ) {
        this._listado[tarea]['completado'] = true;
      } else {
        this._listado[tarea]['completado'] = false;
      }
    });
  }

  borrarTarea( id ){
    delete this._listado[id];
    console.log("\nLa tarea se elimino con exito!".green);
  }
}