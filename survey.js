const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's your hobby? ", (answer2) => {
    rl.question("What kind of music do you like? ", (answer3) => {
      rl.question("What's your favorite meal (eg: dinner, brunch, etc.)? ", (answer4) => {
        rl.question("What do you like to eat for that meal? ", (answer5) => {
          rl.question("What kind of movie/TV show do you like? ", (answer6) => {
            rl.question("What is the one word that would describe you? ", (answer7) => {
              
              console.log(
                `Their name is ${answer}, their hobby is ${answer2}, they like ${answer3} music, their favorite meal is ${answer4}, they like to eat ${answer5}, and they like to watch ${answer6} movies/TV shows. The word that would describe them is ${answer7}.`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});