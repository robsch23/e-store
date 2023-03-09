export function getRandomArbitrary(min, max) {
    while (true) {
        const number = Math.round(Math.random() * (max - min) + min);
        if (number >= 1) {
            return number
        }
    }
  }

  