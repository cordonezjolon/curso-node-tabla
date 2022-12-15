const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = (base = 5, listar, hasta = 10) => {

    return new Promise((resolve, reject) =>{

       
        
        let salida = '';
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index} \n`;
            consola += `${base} ${'X'.green} ${index} ${'='.green} ${base * index} \n`;
              
          }
        if(listar == true){
            console.log('======================='.green);
            console.log('TABLA DEL: '.green, colors.blue(base));
            console.log('======================='.green);
            
            console.log(salida);
        }
          
        
          fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
          resolve(`tabla-${base}.txt creado`);

    })
 



}


module.exports = {
    crearArchivo

}