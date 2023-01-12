const chalk = require('chalk');
const cowsay = require('cowsay');
const readline = require('readline-sync');
const ShuffledList = require('./models/shuffled-list');
const names = require('../data/names.json');

const deck = new ShuffledList(names);

let input;
do {
  console.clear();
  console.log(chalk.gray('Press any key or type exit to finish'))
  console.log(chalk.blue(cowsay.say({ text: deck.next() })))

  input = readline.question('');
} while (input !== 'exit')
