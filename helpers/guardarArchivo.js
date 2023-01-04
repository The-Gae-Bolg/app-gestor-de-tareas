import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), './db/data.json');

const guardarDB = ( datos ) => {
  fs.writeFileSync( filePath, JSON.stringify(datos, null, 2), 'utf-8');
};

const cargarDB = () => {
  if(!fs.existsSync(filePath)){
    return null;
  }

  const file = fs.readFileSync( filePath, { encoding: 'utf-8'});
  return JSON.parse( file );
};

export {
  guardarDB,
  cargarDB
}