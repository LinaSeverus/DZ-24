'use strict';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

function generateArr() {
    const arr = [];

    function generateNumber() {
        const randomNum = getRandomNumber();

        if (arr.length === 100) return arr;

        if (arr.includes(randomNum)) return generateNumber();          //рекурсия для получения уникального числа

        arr.push(randomNum);
        return arr;
    }
    return generateNumber;                                              //замыкание массива
}

const generator = generateArr();


for (let i = 0; i <= 100; i++) {
    console.log(generator());

}

