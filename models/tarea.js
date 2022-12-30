import { v4 as uuidv4 } from 'uuid';

export default class Tarea{

  constructor( descripcion ){
    this.id = uuidv4();
    this.descripcion = descripcion;
    this.fecha = new Date().toLocaleString();
    this.completado = false;
  }
}