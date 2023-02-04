function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') reject('bad value')

    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}

wait('Conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return wait('dados encotrados', rand(1, 3))
      .then(resposta => {
        console.log(resposta);
      })
  })
  .catch(erro => {
    console.log('erro', erro)
  });

