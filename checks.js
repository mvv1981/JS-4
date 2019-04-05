// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./index.js');

assert.deepEqual(
    getHashTags('Прохожу курс на #pravo по #javascript'),
    ['pravo', 'javascript'],
    'Строка "Прохожу курс на #pravo по #javascript"' +
    ' должна содержать хэштеги "pravo, javascript"'
);

assert.deepEqual(
    getHashTags('#я прохожу курс в #Праvo'),
    ['я', 'Праvo'],
    'Массив должен содержать хэштеги "я, Праvo"'
);

assert.deepEqual(
    getHashTags('#qwerty'),
    ['qwerty'],
    'Массив должен содержать хэштег "qwerty"'
);

assert.deepEqual(
    getHashTags('qwerty console log'),
    [],
    'Массив должен быть пустым'
);
console.info('Unit tests is OK!');

