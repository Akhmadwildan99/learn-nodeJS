// const validator = require('validator');

const chalk = require('chalk');

const log = console.log;


// const email = validator.isEmail('akhmad@gmail.com');
// console.log(email);

// console.log(validator.isMobilePhone('08134757755', 'id-ID'));

// log(chalk.blue('hello world'));
// log(chalk`
// Akhmad: ${chalk.blue('50%')}
// wildan: ${chalk.red('70%')}
// `);


const nama ='wildan';

log(chalk`lorem {bgBlue.italic ipsum} dolor sit amet: {blue ${nama}}`)




