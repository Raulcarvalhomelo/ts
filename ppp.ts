import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('Qual é o seu nome? ', (answer) => {
//   console.log(`Olá, ${answer}!`);
//   rl.close();
// });

rl.prompt();
rl.on('digita ', (input) => {
  console.log(`Você digitou: ${input}`);
  rl.close();
});