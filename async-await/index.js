function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') reject('bad value')

    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}

async function executa() {
  try {
    const frase1 = await esperaAi('1', rand())
    console.log(frase1)
    const frase2 = await esperaAi(2, rand())
    console.log(frase2)
    const frase3 = await esperaAi('3', rand())
    console.log(frase3)
    const frase4 = await esperaAi('4', rand())
    console.log(frase4)
  } catch (erro) {
    console.error(erro)
  }
}

executa()