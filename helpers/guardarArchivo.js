import fs from 'fs';

const archivo = './db/data.json'

const guardarDB = ( datos ) => {
  fs.writeFileSync( archivo, JSON.stringify(datos));
};

const cargarDB = () => {
  if(!fs.existsSync(archivo)){
    return null;
  }

  const file = fs.readFileSync( archivo, { encoding: 'utf-8'});
  return JSON.parse( file );
};

export {
  guardarDB,
  cargarDB
}