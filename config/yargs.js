const { options } = require('yargs');
const  argv  = require('yargs')
    
.options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'
         
    },
    'l': {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false
         
    },
    'h': {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'este es el numero hasta donde quieres la tabla'
         
    },
  })
        .check((argv, options) =>{
            if(isNaN(argv.b)){ 
                throw 'la base tiene que ser un numero'
            }
            return true
        })
        .argv;



        module.exports = argv;