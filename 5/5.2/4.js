function random(min, max) {
    console.log(Math.floor(min + Math.random() * (max + 1 - min)));
}

random(1, 5)