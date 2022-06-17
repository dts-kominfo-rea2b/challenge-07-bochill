const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve) => {
    let total = 0;
    promiseTheaterIXX()
      .then((hasilNonton) => {
        hasilNonton.forEach((key) => {
          if (key.hasil == emosi) {
            total += 1;
          }
        });
      })
      .then(
        promiseTheaterVGC().then((hasilNonton) => {
          hasilNonton.forEach((key) => {
            if (key.hasil == emosi) {
              total += 1;
            }
          });
          resolve(total);
        })
      );
  });
};

module.exports = {
  promiseOutput,
};
